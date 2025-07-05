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
export interface CreateButtonWrapperProps {
    onSubmit?: (data: HighlightProps) => void;
}
