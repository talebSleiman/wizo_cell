import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.product.id);
            if (findProduct) {
                findProduct.quantity = action.payload.quantity;
            } else {
                const productClone = { ...action.payload.product, quantity: action.payload.quantity };
                state.push(productClone);
            }
        },
        deleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
        clear: (state, action) => {
            return [];
        },
    },
})

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;