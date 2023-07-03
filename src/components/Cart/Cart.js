import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../../rtk/slices/cart-slice';
import CartCard from './CartCard';
import { totalPrice } from '../../utils/price';


const Cart = () => {

    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clear());
    }

    const handleOrder = () => {
        let message = `Hello Wizo, my order is: `;
        cartProducts.forEach(product => {
            message += `${product.id} x${product.quantity} `;
        })
        message += ` Total Price: ${totalPrice(cartProducts)}`;
        const url = `https://api.whatsapp.com/send/?phone=96176032980&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
        window.open(url, "_blank");
    }

    return (
        <section className='vh-100' style={{ backgroundColor: '#2B2B2B' }}>
            <div className='container'>
                {cartProducts.length === 0 ? (<h2 className='text-center py-4 text-white'>You Don't have any Products in Your Cart</h2>) : (
                    <>
                        <h3 className='text-white fw-bold'>YOUR PRODUCT CART</h3>
                        {cartProducts.map((product) => {
                            return (
                                <CartCard key={product.id} data={product} />
                            )
                        })}
                        <div className='mt-2 mb-5 text-end'>
                            <button className='btn btn-primary mx-3' onClick={handleClear} style={{ letterSpacing: '2px' }}>CLEAR ALL</button>
                            <button className='btn btn-primary' onClick={handleOrder} style={{ letterSpacing: '2px' }}>ORDER NOW</button>
                        </div>
                    </>
                )}
                <div className='d-flex justify-content-between pt-5' style={{ borderTop: "1px solid #ffffffe8" }}>
                    <h4 style={{ color: "#ffffffd4" }}>CART TOTAL</h4>
                    <h5 style={{ color: "#ffffffd4" }}>{totalPrice(cartProducts)}</h5>
                </div>
            </div>
        </section >
    );
};

export default Cart;