'use client';

import { useState } from 'react';
import CreateButton from './CreateButton';
import CreateHighlightModal from './CreateHighlightModal';

export default function CreateButtonWrapper() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (data: any) => {
        console.log("data: " + JSON.stringify(data));
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
