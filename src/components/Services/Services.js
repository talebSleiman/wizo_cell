import { useEffect, useState } from "react";
import AlfaServices from "./AlfaServices";
import TouchServices from "./TouchServices";
import axios from "axios";

import './Services.css';

export default function Services() {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("./data.json").then((res) => res.data).then((res) => setData(res)).catch((err) => console.log(err.message));
    };

    useEffect(() => {
        getData();
    }, []);

    const alfaData = data.filter((el) => el.type === "Alfa");
    const touchData = data.filter((el) => el.type === "Touch");

    return (
        <>
            <AlfaServices data={alfaData} />
            <TouchServices data={touchData} />
        </>
    );
}