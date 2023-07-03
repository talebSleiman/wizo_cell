import { useState } from "react";
import { deleteFromCart, addToCart } from '../../rtk/slices/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import { changePriceQty } from "../../utils/price";


const CartCard = (props) => {

    const product = props.data;
    const [count, setCount] = useState(product.quantity);
    const dispatch = useDispatch();

    const addCount = (product) => {
        setCount(count + 1);
        dispatch(addToCart({ ...product, quantity: count + 1 }))
    }

    const minusCount = (product) => {
        if (count > 1) {
            setCount(count - 1);
            dispatch(addToCart({ ...product, quantity: count - 1 }))
        }
    }

    const handleRemove = (product) => {
        dispatch(deleteFromCart(product));
    }

    return (
        <div className='d-flex align-items-center py-2 my-5 position-relative' style={{ backgroundColor: "#ffffff59", borderRadius: "16px" }}>
            <div className='px-3 pt-1 ms-3 me-5' style={{ border: '2px solid rgba(255,255,255,0.69)', borderRadius: '10px' }}>
                <p onClick={() => addCount(product)}><i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i></p>
                <p className='text-white'>{count}</p>
                <p onClick={() => minusCount(product)}><i className="fa-solid fa-minus" style={{ color: "#ffffff" }}></i></p>
            </div>
            <div className="ms-2">
                <img src={product.image} className='card-image-top' style={{ width: '150px' }} alt='product' />
            </div>
            <div className='ms-4 px-4'>
                <h3 className="fw-bold text-white">{product.type}</h3>
                <h4 className="fw-bold text-white">{changePriceQty(product.price, count)}</h4>
            </div>
            <span onClick={() => handleRemove(product)} className="position-absolute top-0 end-0 badge">
                <i className="fa-solid fa-xmark fa-2x"></i>
            </span>
        </div>
    );
}

export default CartCard;