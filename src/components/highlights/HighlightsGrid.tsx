import Highlight from "@/components/highlights/Highlight";
import { HighlightsGridProps } from "@/types/types";
import type { JSX } from "react";

// Grid component to display highlights
export default function HighlightsGrid({ highlights }: HighlightsGridProps): JSX.Element {
    if (!highlights) {
        return <div>Loading...</div>;
    }

    {/* Newest to oldest */ }
    const reversedHighlights = [...highlights].reverse();

    return (
        <section className="highlights-grid">
                {reversedHighlights.map((highlight, index) => (
                    <Highlight
                        key={index}
                        title={highlight.title}
                        location={highlight.location}
                        description={highlight.description}
                    />
                ))}
        </section>
    );
}
