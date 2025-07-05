import type { JSX } from 'react';

// Simple header 
export default function Header(): JSX.Element {
    return (
        <header>
            <div>

                <h1>HIGHLIGHTS</h1>
                <h2>What are the special moments of your life?</h2>

                {/* Why american spelling? */}
                <p>We believe that every moment counts! Share your favorite, unforgettable memories, and the stories that make your life shine.</p>
            </div>
        </header>
    );
}
