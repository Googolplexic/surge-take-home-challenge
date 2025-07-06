import { HighlightProps } from "@/types/types";
import { useState, useEffect } from "react";
import type { JSX } from "react";
import Image from "next/image";

// Cache for image URLs to prevent duplicate fetches/api calls
const imageCache = new Map<string, string | null>();

// Individual highlight component
export default function Highlight({ title, location, description }: HighlightProps): JSX.Element | null {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imageError, setImageError] = useState<boolean>(false);
    const [imageLoading, setImageLoading] = useState<boolean>(false);
    const [imageRendered, setImageRendered] = useState<boolean>(false);

    useEffect(() => {
        async function tryFetchImage(prompt: string): Promise<boolean> {
            // Check cache first
            if (imageCache.has(prompt)) {
                const cachedUrl = imageCache.get(prompt);
                if (cachedUrl) {
                    setImageUrl(cachedUrl);
                    return true;
                } else {
                    // null in cache means this prompt failed before
                    return false;
                }
            }

            try {
                const response = await fetch(`/api/images?prompt=${encodeURIComponent(prompt)}`);
                const imageData = await response.json();

                if (response.ok && imageData.url) {
                    imageCache.set(prompt, imageData.url);
                    setImageUrl(imageData.url);
                    return true;
                }

                throw new Error('No image URL returned');
            } catch (error) {
                console.log('Failed to fetch image with prompt:', prompt, error);
                imageCache.set(prompt, null);
                return false;
            }
        }

        async function fetchImage(): Promise<void> {
            setImageError(false);
            setImageLoading(true);
            setImageRendered(false);

            // Fallback prompts in order of preference
            const fallbackPrompts = [
                `${title} ${location}`,  // Original prompt
                title,                   // Just the title
                location,               // Just the location
                'forest'                // Generic fallback
            ];

            let success = false;

            for (const prompt of fallbackPrompts) {
                if (prompt && prompt.trim()) {
                    success = await tryFetchImage(prompt.trim());
                    if (success) break;
                }
            }

            if (!success) {
                setImageError(true);
            }

            setImageLoading(false);
        }

        if (title || location) {
            fetchImage();
        }
    }, [title, location]);


    // If somehow still error
    if (imageError) {
        return null;
    }

    return (
        <div className={`highlight ${imageLoading ? 'highlight-loading' : 'fade-in'}`}>
            {imageUrl && !imageError && !imageLoading && (
                <Image
                    className={`highlight-image ${imageRendered ? 'fade-in' : 'invisible'}`}
                    src={imageUrl}
                    alt={`${title} in ${location}`}
                    width={500}
                    height={300}
                    onLoad={() => setImageRendered(true)}
                />
            )}

            {!imageLoading && (
                <>
                    <div className="highlight-header">
                        <h3 className="highlight-title">{title}</h3>
                        <p className="highlight-location">{location}</p>
                    </div>
                    <p className="highlight-description">{description}</p>
                </>
            )}
        </div>
    );
}
