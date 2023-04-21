import { useState } from "react";

export default function Product(props) {
    const product = props.product;
    const [count, setCount] = useState(1);

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
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-lg">
                <img src={product.img_url} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="mb-3">
                        <i className="fa-solid fa-arrow-right fa-xl right"></i>
                        <span className="card-title">{price}</span>
                        {/* h4 */}
                        <i className="fa-solid fa-arrow-left fa-xl left"></i>
                    </div>
                    <div>
                        <span onClick={decrease}>
                            <i className="fa-solid fa-minus fa-xl"></i>
                        </span>
                        <span className="card-text">{count}</span>
                        <span onClick={increase}>
                            <i className="fa-solid fa-plus fa-xl"></i>
                        </span>
                        {/* p */}
                    </div>
                    {/* <a href="/" className="btn btn-primary">Add To Cart</a> */}
                </div>
            </div>
        </div>
    );
}