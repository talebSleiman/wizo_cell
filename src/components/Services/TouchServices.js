import { useDispatch, useSelector } from "react-redux";
import MainTitle from "./MainTitle";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/products-slice";

export default function TouchServices() {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const rechargeCards = products.filter((el) => el.category === "Recharge Cards" && el.type === "Touch");
    const rechargeDays = products.filter((el) => el.category === "Recharge Days" && el.type === "Touch");

    return (
        <div className="touch-services text-center py-5" id="touch-services">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative ms-auto me-auto">
                    <h2 data-text="Touch Services">Touch Services</h2>
                </div>
                <div className="touch-recharge-cards" id="touch-recharge-cards">
                    <MainTitle name="Recharge Cards" />
                    <div className="row justify-content-center">
                        {rechargeCards.map((card) => {
                            return <Product product={card} isTouch={true} key={card.id} />
                        }
                        )}
                    </div>
                </div>
                <div className="touch-recharge-days" id="touch-recharge-days">
                    <MainTitle name="Recharge Days" />
                    <div className="row justify-content-center">
                        {rechargeDays.map((card) => {
                            return <Product product={card} isTouch={true} key={card.id} />
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}