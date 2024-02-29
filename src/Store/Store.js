import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Slices/counterslice"


export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})