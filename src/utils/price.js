const sayrafe = 86100;

const changePrice = (productPrice) => {
    let price = Math.trunc(Math.ceil(sayrafe * productPrice));
    price = Math.floor(price / 1000) * 1000;
    price = `${price.toLocaleString()}LL`;
    return price;
}

const changePriceQty = (productPrice, quantity) => {
    let price = Math.trunc(Math.ceil(sayrafe * productPrice));
    price = Math.floor(price / 1000) * 1000 * quantity;
    price = `${price.toLocaleString()}LL`;
    return price;
}


const changePriceQtyWithoutLL = (productPrice, quantity) => {
    let price = Math.trunc(Math.ceil(sayrafe * productPrice));
    price = Math.floor(price / 1000) * 1000 * quantity;
    return price;
}



const totalPrice = (ls) => {
    const total = ls.reduce((acc, current) => acc + (changePriceQtyWithoutLL(current.price, current.quantity)), 0);
    return `${total.toLocaleString()}LL`;
}

module.exports = {
    changePrice,
    changePriceQty,
    totalPrice,
}