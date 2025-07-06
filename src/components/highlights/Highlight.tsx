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
        async function fetchImage(): Promise<void> {
            try {
                setImageError(false);
                setImageLoading(true);

                const response = await fetch(`/api/images?prompt=${encodeURIComponent(`${title} ${location}`)}`);

                if (response.ok) {
                    const imageData = await response.json();
                    if (imageData.url) {
                        setImageUrl(imageData.url);
                    } else {
                        setImageError(true);
                    }
                } else {
                    setImageError(true);
                }
            } catch (error) {
                console.error('Failed to fetch image:', error);
                setImageError(true);
            } finally {
                setImageLoading(false);
            }
        }

        if (title && location) {
            fetchImage();
        }
    }, [title, location]);

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
