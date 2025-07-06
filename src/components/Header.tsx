import type { JSX } from 'react';

// Simple header 
export default function Header(): JSX.Element {
    return (
        <header>
            <div className="header-content">
                <div className="header-titles">
                    <h1 className="header-title">HIGHLIGHTS</h1>
                    <h2 className="header-subtitle">What are the special moments of your life?</h2>
                </div>

                {/* Why american spelling? */}
                <p className="header-description">We believe that every moment counts! Share your favorite, unforgettable memories, and the stories that make your life shine.</p>
            </div>
        </header>
    );
}
