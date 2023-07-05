import './Footer.css';

const Footer = () => {
    return (
        <footer className='p-2 text-center text-white wow fadeIn' data-wow-delay="0.1s">
            <div className='container'>
                <p>
                    Copyright <i className="fa-regular fa-copyright"></i> {new Date().getFullYear()} <a href='/'> WizoCell </a> - All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;