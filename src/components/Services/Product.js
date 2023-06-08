import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";

export default function Product(props) {

    const product = props.product;
    const dispatch = useDispatch();

    const sayrafe = 86700;

    let price = Math.trunc(Math.ceil(sayrafe * product.price));
    price = Math.floor(price / 1000) * 1000;
    price = `${price.toLocaleString()}LL`;

    const title = props.isTouch ? <h5 className="card-title touch">{price}</h5> : <h5 className="card-title alfa">{price}</h5>

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 g-5">
            <div className="card">
                <img src={product.img_url} loading="lazy" className="card-img-top" alt="" />
                <div className="card-body">
                    {title}
                </div>
                <button className="btn btn-primary" onClick={() => dispatch(addToCart({ product }))}>Add To Cart</button>
            </div>
        </div>
    );
}