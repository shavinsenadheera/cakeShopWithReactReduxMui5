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
        },
        buyMore: (state, action) => {
            console.log(action);
            state.noOfCakes += action.payload
        }
    }
})

export const { buyCake, addCake, buyMore } = CakeShopSlicer.actions;
export default CakeShopSlicer.reducer;