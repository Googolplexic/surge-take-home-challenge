'use client';

import { useState } from 'react';
import type { JSX } from 'react';
import CreateButton from './CreateButton';
import CreateHighlightModal from './CreateHighlightModal';
import { HighlightProps, CreateButtonWrapperProps } from '@/types/types';

// Wrapper is needed since the CreateButton and CreateHighlightModal are not in the same file
export default function CreateButtonWrapper({ onSubmit }: CreateButtonWrapperProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateClick = (): void => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    const handleSubmit = (data: HighlightProps): void => {
        if (onSubmit) {
            onSubmit(data);
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <CreateButton onClick={handleCreateClick} />
            <CreateHighlightModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
            />
        </>
    );
}
