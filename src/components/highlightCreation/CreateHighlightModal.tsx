import type { JSX } from 'react';
import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CreateHighlightModalProps } from '@/types/types';

// Modal component for creating a new highlight
export default function CreateHighlightModal({ isOpen, onClose, onSubmit }: CreateHighlightModalProps): JSX.Element | null {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen && !isClosing) {
            setIsClosing(false);
        }
    }, [isOpen, isClosing]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 250);
    };

    if (!isOpen && !isClosing) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        // Prevent page refresh on form submission
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title') as string,
            location: formData.get('location') as string,
            description: formData.get('description') as string,
        };

        onSubmit(data);
        handleClose();
    };

    return (
        <div className={`modal-container ${isClosing ? 'modal-closing' : ''}`} onClick={handleClose}>
            <div className="create-highlight-modal" onClick={(e) => e.stopPropagation()}>
                {/* Self-note: change to icon */}
                <button onClick={handleClose} className="modal-close-button" aria-label="Close modal" title="Close modal">
                    <XMarkIcon className="x-icon" strokeWidth={2} />
                </button>
                <div className="modal-header">
                    <h2 className="modal-title">Create a highlight</h2>


                </div>

                <form onSubmit={handleSubmit} className='create-highlight-form'>
                    <div className="form-content">
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Highlight name <span className='text-red-500'>*</span></label>
                            <input type="text" id="title" name="title" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="location" className="form-label">Location <span className='text-red-500'>*</span></label>
                            <input type="text" id="location" name="location" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className="form-label">Description <span className='text-red-500'>*</span></label>
                            <textarea id="description" name="description" required></textarea>
                        </div>
                    </div>


                    <div className="form-actions">
                        <button type="button" onClick={handleClose} className='form-cancel-button'>
                            <span className='button-text'>Cancel</span>
                        </button>
                        <button type="submit" className='form-create-button'>
                            <span className='button-text'>Confirm</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
