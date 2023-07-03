import Product from "./Product";
import MainTitle from "./MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/products-slice";

const AlfaServices = () => {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const rechargeCards = products.filter((el) => el.category === "Recharge Cards" && el.type === "Alfa");
    const rechargeDays = products.filter((el) => el.category === "Recharge Days" && el.type === "Alfa");
    const alfaGift = products.filter((el) => el.category === "Alfa Gift" && el.type === "Alfa");
    const weeklyData = products.filter((el) => el.category === "Weekly Data" && el.type === "Alfa");
    const alfaUshare = products.filter((el) => el.category === "Alfa Ushare" && el.type === "Alfa");

    return (
        <div className="alfa-services text-center py-5" id="alfa-services">
            <div className="container">
                <div className="main-title mb-5 position-relative ms-auto me-auto">
                    <h2 className="">ALFA</h2>
                </div>
                <div className="alfa-recharge-cards" id="alfa-recharge-cards">
                    <MainTitle name="CARDS" />
                    <div className="row justify-content-center g-5">
                        {rechargeCards.map((card) => {
                            return <Product product={card} isTouch={false} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="alfa-recharge-days" id="alfa-recharge-days">
                    <MainTitle name="DAYS" />
                    <div className="row justify-content-center g-5">
                        {rechargeDays.map((card) => {
                            return <Product product={card} isTouch={false} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="alfa-gift" id="alfa-gift">
                    <MainTitle name="GIFT" />
                    <div className="row justify-content-center g-5">
                        {alfaGift.map((card) => {
                            return <Product product={card} isTouch={false} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="weekly-data" id="weekly-data">
                    <MainTitle name="WEEKLY" />
                    <div className="row justify-content-center g-5">
                        {weeklyData.map((card) => {
                            return <Product product={card} isTouch={false} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="ushare" id="ushare">
                    <MainTitle name="USHARE" />
                    <div className="row justify-content-center g-5">
                        {alfaUshare.map((card) => {
                            return <Product product={card} isTouch={false} key={card.id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlfaServices;