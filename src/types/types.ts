export interface HighlightProps {
    title: string;
    location: string;
    description: string;
}

export interface CreateHighlightRequest {
    title: string;
    location: string;
    description: string;
}

export interface CreateHighlightModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

export interface CreateButtonProps {
    onClick: () => void;
}
