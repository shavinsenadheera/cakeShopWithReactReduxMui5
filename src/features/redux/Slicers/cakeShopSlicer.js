import { createSlice } from "@reduxjs/toolkit";

const CakeShopSlicer = createSlice({
    name: 'cakeshop',
    initialState: {
        noOfCakes: 10
    },
    reducers: {
        buyCake: state => {
            state.noOfCakes -= 1
        },
        addCake: state => {
            state.noOfCakes += 1
        }
    }
})

export const { buyCake, addCake } = CakeShopSlicer.actions;
export default CakeShopSlicer.reducer;