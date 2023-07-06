import './Landing.css';

const Landing = () => {
    return (
        <div className="landing pt-4 text-center wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className='content animated slideInDown'>
                    <h1 className='fw-bold '>WELCOME TO OUR</h1>
                    <h2 className='fw-bold '>WEBSITE</h2>
                    <p className='fw-bold '>the one-stop-shop for all your mobile recharge card needs!</p>
                    <p className='fw-bold'>Browse our wide selection of cards, choose your preferred provider</p>
                    <p className='fw-bold'>TOP UP YOUR PHONE INSTANTLY - IT'S THAT SIMPLE!</p>
                    <button>SHOP NOW</button>
                </div>
                <div className='figure mt-3 animated slideInLeft'>
                    <img src='./imgs/hand.png' alt='hand' />
                </div>
            </div>
        </div>
    );
}

export default Landing;