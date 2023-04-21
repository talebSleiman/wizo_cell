import './Landing.css';

export default function Landing() {
    return (
        <div className="landing pt-5 text-center">
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./imgs/logo.jpeg" alt="l" />
                        </div>
                        <div className="carousel-item">
                            <img src="./imgs/alfa-touch-1.jpeg" alt="l" />
                        </div>
                        <div className="carousel-item">
                            <img src="./imgs/touch.png" alt="l" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}