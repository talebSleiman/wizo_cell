import { useState, useEffect } from 'react';
import './Up.css';

export default function Up() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (showButton) {
        return (
            <button className="btn btn-lg btn-outline-primary btn-lg-square up show" onClick={handleClick}>
                <i className="fa fa-angle-double-up"></i>
            </button>
        );
    } else {
        return (
            <button className="btn btn-lg btn-outline-primary btn-lg-square up" onClick={handleClick}>
                <i className="fa fa-angle-double-up"></i>
            </button>
        );
    }
}