import { useDispatch, useSelector } from "react-redux";
import MainTitle from "./MainTitle";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/products-slice";

const TouchServices = () => {

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
                <div className="main-title mb-5 position-relative ms-auto me-auto">
                    <h2 className="">TOUCH</h2>
                </div>
                <div className="touch-recharge-cards" id="touch-recharge-cards">
                    <MainTitle name="CARDS" />
                    <div className="row justify-content-center g-5">
                        {rechargeCards.map((card) => {
                            return <Product product={card} isTouch={true} key={card.id} />
                        }
                        )}
                    </div>
                </div>
                <div className="touch-recharge-days" id="touch-recharge-days">
                    <MainTitle name="DAYS" />
                    <div className="row justify-content-center g-5">
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

export default TouchServices;