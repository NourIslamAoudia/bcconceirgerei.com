'use client';

import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

/**
 * ServicesCTA — Small client component that wraps the CTA button + modal.
 * Extracted from the services page to keep the page as a server component.
 */
export default function ServicesCTA({ ctaText, ctaButton, modalTitle }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="services-closing-cta">
            <p className="closing-message">{ctaText}</p>
            <button
                className="cta-estimation-button"
                onClick={() => setIsModalOpen(true)}
            >
                {ctaButton}
            </button>
            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
            />
        </section>
    );
}
