import './Landing.css';

export default function Landing() {
    return (
        <div className="landing pt-5 text-center">
            <div className="container">
                <div className='content'>
                    <h1>WELCOME TO OUR</h1>
                    <h2>WEBSITE</h2>
                    <p>the one-stop-shop for all your mobile recharge card needs!</p>
                    <p>Browse our wide selection of cards, choose your preferred provider</p>
                    <p>TOP UP YOUR PHONE INSTANTLY - IT'S THAT SIMPLE!</p>
                    <button>SHOP NOW</button>
                </div>
                <div className='figure'>
                    <img src='./imgs/hand.png' loading='lazy' alt='hand' />
                </div>
            </div>
        </div>
    );
}