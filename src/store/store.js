import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articlesSlice";
import personalDataSlice from "./slices/personalDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataSlice,
    articles: articlesSlice,
  },
});

export default store;
