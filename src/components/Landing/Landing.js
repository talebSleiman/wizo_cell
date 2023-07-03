import './Landing.css';

const Landing = () => {
    return (
        <div className="landing pt-5 text-center">
            <div className="container">
                <div className='content'>
                    <h1 className='fw-bold'>WELCOME TO OUR</h1>
                    <h2 className='fw-bold'>WEBSITE</h2>
                    <p className='fw-bold'>the one-stop-shop for all your mobile recharge card needs!</p>
                    <p className='fw-bold'>Browse our wide selection of cards, choose your preferred provider</p>
                    <p className='fw-bold'>TOP UP YOUR PHONE INSTANTLY - IT'S THAT SIMPLE!</p>
                    <button>SHOP NOW</button>
                </div>
                <div className='figure'>
                    <img src='./imgs/hand.png' alt='hand' />
                </div>
            </div>
        </div>
    );
}

export default Landing;