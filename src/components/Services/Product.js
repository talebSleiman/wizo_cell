import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { changePrice } from "../../utils/price";

const Product = (props) => {

    const product = props.product;
    const dispatch = useDispatch();

    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={product.image} className="card-img-top" alt="product" />
                <div className="card-body">
                    {props.isTouch ? (
                        <>
                            <h5 className="card-title mb-4 touch">{changePrice(product.price)}</h5>
                            <button className="btn btnTouch fw-bold" onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>ADD TO CART</button>
                        </>
                    ) : (
                        <>
                            <h5 className="card-title mb-4 alfa">{changePrice(product.price)}</h5>
                            <button className="btn btnAlfa fw-bold" onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>ADD TO CART</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;