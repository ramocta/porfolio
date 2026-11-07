import { useState, useEffect } from 'react';
import GooeyNav from '../styles/navbar/Navbar';

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        // { label: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            const sectionElements = items.map(item => document.querySelector(item.href));

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveIndex(i);
                    return;
                }
            }
            setActiveIndex(0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <GooeyNav
            items={items}
            activeIndex={activeIndex}
            theme="light"
            size="md"
            frame
            particleCount={15}
            spread={56}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            onChange={(index) => setActiveIndex(index)}
        />
    );
}
