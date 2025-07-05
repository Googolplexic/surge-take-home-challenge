import { CreateHighlightModalProps } from '@/types/types';

export default function CreateHighlightModal({ isOpen, onClose, onSubmit }: CreateHighlightModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title') as string,
            location: formData.get('location') as string,
            description: formData.get('description') as string,
        };

        onSubmit(data);
    };

    return (
        <div>
            <div>
                <h2>Create New Highlight</h2>

                {/* Self-note: change to icon */}
                <button onClick={onClose}>x</button>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description"></textarea>
                </div>

                <div>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}
