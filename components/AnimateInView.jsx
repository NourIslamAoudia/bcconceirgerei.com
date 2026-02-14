'use client';

import { useRef } from 'react';
import useInView from '../hooks/useInView';

/**
 * Lightweight client wrapper for scroll-triggered CSS animations.
 * Adds the 'is-visible' class when the element scrolls into view.
 * This allows parent server components to render real text in the HTML
 * while still having IntersectionObserver-based entrance animations.
 */
export default function AnimateInView({ children, className = '', threshold = 0.12, as: Tag = 'div' }) {
    const ref = useRef(null);
    const visible = useInView(ref, { threshold });

    return (
        <Tag ref={ref} className={`${className} ${visible ? 'is-visible' : ''}`}>
            {children}
        </Tag>
    );
}
