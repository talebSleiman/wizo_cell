import Product from "./Product";
import MainTitle from "./MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/products-slice";

export default function AlfaServices() {

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
        <div className="alfa-services text-center pt-5" id="alfa-services">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative ms-auto me-auto">
                    <h2 data-text="Alfa Services">Alfa Services</h2>
                </div>
                <div className="alfa-recharge-cards" id="alfa-recharge-cards">
                    <MainTitle name="Recharge Cards" />
                    <div className="row justify-content-center">
                        {rechargeCards.map((card) => {
                            return <Product product={card} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="alfa-recharge-days" id="alfa-recharge-days">
                    <MainTitle name="Recharge Days" />
                    <div className="row justify-content-center">
                        {rechargeDays.map((card) => {
                            return <Product product={card} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="alfa-gift" id="alfa-gift">
                    <MainTitle name="Alfa Gift" />
                    <div className="row justify-content-center">
                        {alfaGift.map((card) => {
                            return <Product product={card} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="weekly-data" id="weekly-data">
                    <MainTitle name="Weekly Data" />
                    <div className="row justify-content-center">
                        {weeklyData.map((card) => {
                            return <Product product={card} key={card.id} />
                        })}
                    </div>
                </div>
                <div className="ushare" id="ushare">
                    <MainTitle name="Alfa Ushare" />
                    <div className="row justify-content-center">
                        {alfaUshare.map((card) => {
                            return <Product product={card} key={card.id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}