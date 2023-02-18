import { configureStore } from "@reduxjs/toolkit";
import NewsReducer, { NewsState } from "./NewsSlice";

const store = configureStore({
  reducer: {
    news: NewsReducer,
  },
});

export type RootState = {
  news: NewsState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
