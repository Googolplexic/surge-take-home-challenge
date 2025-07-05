import { CreateButtonProps } from '@/types/types'; 

// Floating button to create a new highlight
export default function CreateButton({ onClick }: CreateButtonProps) {
    return (
        <button onClick={onClick}>
            <span>Create</span>
            <span>+</span>
        </button>
    );
}
