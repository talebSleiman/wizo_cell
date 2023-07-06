import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../../rtk/slices/cart-slice';
import CartCard from './CartCard';
import { totalPrice, changePriceQty } from '../../utils/price';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClear = () => {
        dispatch(clear());
    }

    const handleOrder = () => {
        let message = `Hello Wizo, my order is: `;
        cartProducts.forEach(product => {
            message += `${product.name} x${product.quantity} Price = ${changePriceQty(product.price, product.quantity)}, `;
        })
        message += ` Total Price: ${totalPrice(cartProducts)}`;
        const url = `https://api.whatsapp.com/send/?phone=96171754138&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
        window.open(url, "_blank");
    }

    const handleClick = () => {
        navigate('/')
    }

    return (
        <section className='min-vh-100 h-100' style={{ backgroundColor: '#2B2B2B' }}>
            <div className='container position-relative wow fadeInUp' data-wow-delay="0.1s">
                {cartProducts.length === 0 ? (<h2 className='text-center pt-5 pb-4 text-white'>You Don't have any Products in Your Cart</h2>) : (
                    <>
                        <h3 className='text-white pt-5 fw-bold'>YOUR PRODUCT CART</h3>
                        {cartProducts.map((product) => {
                            return (
                                <CartCard key={product.id} data={product} />
                            )
                        })}
                        <div className='mt-2 mb-5 text-end'>
                            <button className='btn mybtn mx-3' onClick={handleClear}>CLEAR ALL</button>
                            <button className='btn mybtn' onClick={handleOrder}>ORDER NOW</button>
                        </div>
                    </>
                )}
                <div className='d-flex justify-content-between pt-5' style={{ borderTop: "1px solid #ffffffe8" }}>
                    <h4 style={{ color: "#ffffffd4" }}>CART TOTAL</h4>
                    <h5 style={{ color: "#ffffffd4" }}>{totalPrice(cartProducts)}</h5>
                </div>
                <span onClick={handleClick} className="position-absolute top-0 start-0 pt-2 ps-2 badge">
                    <i className="fa-solid fa-xmark fa-3x"></i>
                </span>
            </div>
        </section >
    );
};

export default Cart;