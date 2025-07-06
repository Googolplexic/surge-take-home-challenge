import { HighlightProps } from "@/types/types";
import { useState, useEffect } from "react";
import type { JSX } from "react";
import Image from "next/image";

// Individual highlight component
export default function Highlight({ title, location, description }: HighlightProps): JSX.Element | null {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imageError, setImageError] = useState<boolean>(false);
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        async function tryFetchImage(prompt: string): Promise<boolean> {
            try {
                const response = await fetch(`/api/images?prompt=${encodeURIComponent(prompt)}`);

                if (response.ok) {
                    const imageData = await response.json();
                    if (imageData.url) {
                        setImageUrl(imageData.url);
                        return true;
                    }
                }
                return false;
            } catch (error) {
                console.error('Failed to fetch image with prompt:', prompt, error);
                return false;
            }
        }

        async function fetchImage(): Promise<void> {
            setImageError(false);
            setImageLoading(true);

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
        <div className="highlight">
            {imageLoading && <div>Loading image...</div>}

            {imageUrl && !imageError && !imageLoading && (
                <Image className="highlight-image" src={imageUrl} alt={`${title} in ${location}`} width={500} height={300} />
            )}

            <div className="highlight-header">
                <h3 className="highlight-title">{title}</h3>
                <p className="highlight-location">{location}</p>
            </div>
            <p className="highlight-description">{description}</p>
        </div>
    );
}
