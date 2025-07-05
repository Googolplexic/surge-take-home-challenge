import {CreateButtonProps} from '@/types/types'; 
export default function CreateButton({ onClick }: CreateButtonProps) {
    return (
        <button onClick={onClick}>
            <span>Create</span>
            <span>+</span>
        </button>
    );
}
