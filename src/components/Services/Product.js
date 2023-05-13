import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../rtk/slices/cart-slice";

export default function Product(props) {

    const product = props.product;
    const [count, setCount] = useState(1);

    // const dispatch = useDispatch();

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const sayrafe = 86700;

    let price = Math.trunc(Math.ceil(sayrafe * product.price));
    price = Math.floor(price / 1000) * 1000 * count;
    price = `${price.toLocaleString()}LL`;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 g-5">
            <div className="card shadow-lg">
                <img src={product.img_url} className="card-img-top" alt="" />
                <div className="card-body">
                    <div>
                        <i className="fa-solid fa-arrow-right fa-xl right"></i>
                        <span className="card-title">{price}</span>
                        {/* h4 */}
                        <i className="fa-solid fa-arrow-left fa-xl left"></i>
                    </div>
                    <div className="py-3">
                        <span onClick={decrease}>
                            <i className="fa-solid fa-minus fa-xl"></i>
                        </span>
                        <span className="card-text">{count}</span>
                        <span onClick={increase}>
                            <i className="fa-solid fa-plus fa-xl"></i>
                        </span>
                        {/* p */}
                    </div>
                    {/* <button className="btn btn-primary" onClick={() => dispatch(addToCart({ product, quatity: count }))}>Add To Cart</button> */}
                </div>
            </div>
        </div>
    );
}