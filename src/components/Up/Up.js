import { useState, useEffect } from 'react';
import './Up.css';

export default function Up() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (showButton) {
        return (
            <button className="btn btn-primary up show" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> Up</button>
        );
    } else {
        return (
            <button className="btn btn-primary up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> Up</button>
        );
    }
}