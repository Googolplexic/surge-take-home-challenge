import Highlight from "@/components/highlights/Hightlight";
export default function HighlightsGrid() {
    return (
        <section>
            {/* Sample data for demonstration purposes */}
            <div>
                <Highlight
                    title="Hiking Grouse Mountain"
                    location="Vancouver, BC"
                    description="A beautiful view of Grouse Mountain."
                />
                <Highlight
                    title="Skiing Whistler"
                    location="Whistler, BC"
                    description="A popular ski resort in Whistler."
                />
            </div>

        </section>
    );
}
