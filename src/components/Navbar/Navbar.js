import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand img-logo" href="/">
                    <img src="./imgs/logo.jpeg" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0 gap-2 gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#alfa-services" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Alfa Services
                            </a>
                            <ul className="dropdown-menu text-center ms-auto me-auto">
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
                            <ul className="dropdown-menu text-center ms-auto me-auto">
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}