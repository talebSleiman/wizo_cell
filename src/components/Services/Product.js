import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { changePrice } from "../../utils/price";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Product = (props) => {

    const product = props.product;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAdd = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        Swal.fire({
            icon: 'success',
            title: 'Your product has been added to cart',
            showCancelButton: true,
            cancelButtonText: "Add more Product",
            confirmButtonText: "Order Now",
        }).then((result)=>{
            if (result.isConfirmed) {
                navigate('/cart');
            }
        })
    }

    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={product.image} className="card-img-top" alt="product" />
                <div className="card-body">
                    {props.isTouch ? (
                        <>
                            <h5 className="card-title mb-4 touch">{changePrice(product.price)}</h5>
                            <button className="btn btnTouch fw-bold" onClick={() => handleAdd(product)}>ADD TO CART</button>
                        </>
                    ) : (
                        <>
                            <h5 className="card-title mb-4 alfa">{changePrice(product.price)}</h5>
                            <button className="btn btnAlfa fw-bold" onClick={() => handleAdd(product)}>ADD TO CART</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;