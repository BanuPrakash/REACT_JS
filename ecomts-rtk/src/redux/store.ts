import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartSlice";
import { profileReducer } from "./features/profileSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { todoReducer } from "./api/fetchTodos";


const store = configureStore({
    // root reducer
    reducer: {
        "cart": cartReducer,
        "profile": profileReducer,
        "todos": todoReducer
    },
   // devTools: false // REDUX DEVTOOL EXTENSION
});

export type RootType = ReturnType<typeof store.getState>
// type safe useSelector
export const useAppSelector:TypedUseSelectorHook<RootType> = useSelector;

export default store;