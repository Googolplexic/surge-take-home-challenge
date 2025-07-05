import Highlight from "@/components/highlights/Hightlight";
import { HighlightsGridProps } from "@/types/types"; 


export default function HighlightsGrid({ highlights }: HighlightsGridProps) {
    if (!highlights) {
        return <div>Loading...</div>;
    }

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
