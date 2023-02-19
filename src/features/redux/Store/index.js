import { configureStore } from "@reduxjs/toolkit";
import cakeShopReducer from '../Slicers/cakeShopSlicer';

const store = configureStore({
    reducer: cakeShopReducer
})

export default store;