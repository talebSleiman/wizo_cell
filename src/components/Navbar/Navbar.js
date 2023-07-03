import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    const cartLeng = useSelector(state => state.cart);

    return (
        <nav className="navbar navbar-expand-lg py-2">
            <div className="container">
                <Link className="navbar-brand img-logo" to="/">
                    <img src="./imgs/logo.jpeg" loading='lazy' alt="logo" />
                </Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Hello User</h5>
                        <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2 gap-lg-4">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#alfa-services" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Alfa Services
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li><a className="dropdown-item" href="#alfa-recharge-cards">Recharge Cards</a></li>
                                    <li><a className="dropdown-item" href="#alfa-recharge-days">Recharge Days</a></li>
                                    <li><a className="dropdown-item" href="#alfa-gift">Alfa Gift(30 days)</a></li>
                                    <li><a className="dropdown-item" href="#weekly-data">Weekly Data(7 days)</a></li>
                                    <li><a className="dropdown-item" href="#ushare">Ushare Data</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#touch-services" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Touch Services
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li><a className="dropdown-item" href="#touch-recharge-cards">Recharge Cards</a></li>
                                    <li><a className="dropdown-item" href="#touch-recharge-days">Recharge Days</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#offers">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#contact">Contact</a>
                            </li>
                            <Link to="/cart">
                                <button type="button" className="btn btn-primary position-relative">
                                    Cart
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-notification bg-danger">
                                        {cartLeng.length}
                                    </span>
                                </button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;