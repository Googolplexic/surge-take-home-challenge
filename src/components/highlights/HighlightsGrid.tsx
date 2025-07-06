import Highlight from "@/components/highlights/Highlight";
import { HighlightsGridProps } from "@/types/types";
import type { JSX } from "react";
import { useEffect, useState } from "react";

// Grid component to display highlights
export default function HighlightsGrid({ highlights }: HighlightsGridProps): JSX.Element {
    const [columnCount, setColumnCount] = useState(1);

    useEffect(() => {
        const updateColumnCount = () => {
            if (window.innerWidth > 788) {
                setColumnCount(3);
            } else if (window.innerWidth > 375) {
                setColumnCount(2); 
            } else {
                setColumnCount(1);
            }
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    if (!highlights) {
        return <div>Loading...</div>;
    }

    const reversedHighlights = [...highlights].reverse();

    // Group highlights by column based on current column count
    const columns: typeof reversedHighlights[] = Array(columnCount).fill(null).map(() => []);

    reversedHighlights.forEach((highlight, index) => {
        const columnIndex = index % columnCount;
        columns[columnIndex].push(highlight);
    });

    console.log("Columns:", columns);

    return (
        <section className="highlights-grid-columns">
            {columns.map((columnHighlights, columnIndex) => (
                <div key={columnIndex} className="highlight-column">
                    {columnHighlights.map((highlight, index) => (
                        <Highlight
                            key={`${columnIndex}-${index}`}
                            title={highlight.title}
                            location={highlight.location}
                            description={highlight.description}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
}