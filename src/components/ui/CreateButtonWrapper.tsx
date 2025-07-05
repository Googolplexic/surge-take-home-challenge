'use client';

import { useState } from 'react';
import CreateButton from './CreateButton';
import CreateHighlightModal from './CreateHighlightModal';
import { HighlightProps, CreateButtonWrapperProps } from '@/types/types';


export default function CreateButtonWrapper({ onSubmit }: CreateButtonWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (data: HighlightProps) => {
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
