import './Footer.css';

export default function Footer() {
    return (
        <footer className='p-3 text-center text-white'>
            <div className='container'>
                <p>
                    Copyright <i className="fa-regular fa-copyright"></i> {new Date().getFullYear()} <a href='/'> WizoCell </a> - All Rights Reserved
                </p>
            </div>
        </footer>
    );
}