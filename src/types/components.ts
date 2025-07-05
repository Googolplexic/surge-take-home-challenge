import { HighlightProps } from './highlight';

export interface CreateHighlightModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: HighlightProps) => void;
}

export interface CreateButtonProps {
    onClick: () => void;
}

export interface HighlightsGridProps {
    highlights?: HighlightProps[] | null;
}
export interface CreateButtonWrapperProps {
    onSubmit?: (data: HighlightProps) => void;
}

