import { HighlightProps } from "@/types/types";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Highlight({ title, location, description }: HighlightProps) {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imageError, setImageError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchImage() {
            try {
                setImageError(false);

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
            }
        }

        if (title && location) {
            fetchImage();
        }
    }, [title, location]);

return (!imageError && (
    <div>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{description}</p>

        {imageUrl && !imageError && (
            <Image src={imageUrl} alt={`${title} in ${location}`} width={500} height={300} />
        )}
    </div>
));
}
