import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/root.reducer";

export const AppStore = configureStore({
   reducer: rootReducer,
   middleware: [thunk]
})