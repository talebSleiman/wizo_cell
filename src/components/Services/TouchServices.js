import MainTitle from "./MainTitle";
import Product from "./Product";

export default function TouchServices(props) {

    const data = props.data;

    const rechargeCards = data.filter((el) => el.category === "Recharge Cards");
    const rechargeDays = data.filter((el) => el.category === "Recharge Days");

    return (
        <div className="touch-services text-center pt-5 pb-5" id="touch-services">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative ms-auto me-auto">
                    <h2 data-text="Touch Services">Touch Services</h2>
                </div>
                <div className="touch-recharge-cards" id="touch-recharge-cards">
                    <MainTitle name="Recharge Cards" />
                    <div className="row justify-content-center">
                        {rechargeCards.map((card) => {
                            return <Product product={card} key={card.id} />
                        }
                        )}
                    </div>
                </div>
                <div className="touch-recharge-days" id="touch-recharge-days">
                    <MainTitle name="Recharge Days" />
                    <div className="row justify-content-center">
                        {rechargeDays.map((card) => {
                            return <Product product={card} key={card.id} />
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}