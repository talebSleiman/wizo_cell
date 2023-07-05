import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
    try {
        // const res = await fetch("./data.json");
        const res = await fetch("https://wizo-cell.onrender.com/api/products/");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

// export const { } = productsSlice.actions;
export default productsSlice.reducer;