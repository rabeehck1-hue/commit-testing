import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: true,
    error: ""
}

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addProducts:(state,actions) => {
            state.data = actions.payload
            state.loading = false
        },
        deleteProducts:(state,actions) => {
           const productId = actions.payload
            state.data = state.data.filter((product) => product.id !==  productId)
        }
    }
})

export const {addProducts,deleteProducts} = productSlice.actions

export default productSlice.reducer