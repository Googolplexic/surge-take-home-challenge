import Highlight from "@/components/highlights/Highlight";
import { HighlightsGridProps } from "@/types/types";

// Grid component to display highlights
export default function HighlightsGrid({ highlights }: HighlightsGridProps) {
    if (!highlights) {
        return <div>Loading...</div>;
    }

    {/* Newest to oldest */ }
    const reversedHighlights = [...highlights].reverse();

    return (
        <section>
            <div>

                {reversedHighlights.map((highlight, index) => (
                    <Highlight
                        key={index}
                        title={highlight.title}
                        location={highlight.location}
                        description={highlight.description}
                    />
                ))}
            </div>
        </section>
    );
}
