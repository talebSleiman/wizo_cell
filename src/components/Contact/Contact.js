import './Contact.css';

export default function Contact() {
    return (
        <div className='contact text-center text-lg-start py-5' id='contact'>
            <div className='container'>
                <div className='social-media d-flex justify-content-between p-4'>
                    <div className="me-4">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/wizo_cell1/" target='_blank' className="text-white me-3" rel="noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://chat.whatsapp.com/GrhmN19f5Ly0uYOxJh4vBd" target='_blank' className="text-white me-3" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className='row mt-3 text-md-start text-lg-center'>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4 text-center">
                        <h4 className="text-uppercase fw-bold pb-3">Wizo Cell</h4>

                        {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" /> */}
                        <p className='py-2'>
                            <a href='tel:+96171754138' className='text-white'> <i className="fa-solid fa-phone mr-3"></i> + 961 71 754 138</a>
                        </p>
                        <p>
                            <a href='http://wa.me/96171754138' target='_blank' className='text-white' rel="noreferrer"> <i className="fa-brands fa-whatsapp mr-3"></i> + 961 71 754 138</a>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4 text-center">
                        <h4 className="text-uppercase fw-bold pb-3">Alfa Services</h4>
                        {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" /> */}
                        <p className='py-2'>
                            <a href="#alfa-recharge-cards" className="text-white">Recharge Cards</a>
                        </p>
                        <p>
                            <a href="#alfa-recharge-days" className="text-white">Recharge Days</a>
                        </p>
                        <p className='py-2'>
                            <a href="#alfa-gift" className="text-white">Alfa Gift</a>
                        </p>
                        <p>
                            <a href="#weekly-data" className="text-white">Weekly Data</a>
                        </p>
                        <p className='py-2'>
                            <a href="#ushare" className="text-white">Alfa Ushare</a>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4 text-center">
                        <h4 className="text-uppercase fw-bold pb-3">Touch Services</h4>
                        {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" /> */}
                        <p className='py-3'>
                            <a href="#touch-recharge-cards" className="text-white">Recharge Cards</a>
                        </p>
                        <p>
                            <a href="#touch-recharge-days" className="text-white">Recharge Days</a>
                        </p>
                    </div>
                    {/* <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <a href="/" className="text-white">Home</a>
                        </p>
                        <p>
                            <a href="#alfa-services" className="text-white">Alfa Services</a>
                        </p>
                        <p>
                            <a href="#touch-services" className="text-white">Touch Services</a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}