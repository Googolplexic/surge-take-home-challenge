import type { JSX } from 'react';
import { CreateButtonProps } from '@/types/types';

// Floating button to create a new highlight
export default function CreateButton({ onClick }: CreateButtonProps): JSX.Element {
    return (
        <button onClick={onClick}>
            <span>Create</span>
            <span>+</span>
        </button>
    );
}
