import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterReducer, counterSlice } from "./features/counterSlice";
import { detailsReducer } from "./features/detailSlice";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterReducer,
    detail: detailsReducer,
  },
  devTools: process.env.MODE === "development",
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
