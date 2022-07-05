import { createSlice } from "@reduxjs/toolkit";
import articles from "../../articles.json";

const getArticlesFromLocalStorage = localStorage.getItem("articles")
  ? JSON.parse(localStorage.getItem("articles"))
  : localStorage.setItem("articles", JSON.stringify(articles.articles));

const initialState = {
  allArticles: getArticlesFromLocalStorage,
  currentActiveArticles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    replaceArticle: (state, action) => {
      state.currentActiveArticles = [state.allArticles[action.payload]];
    },

    stickArticle: (state, action) => {
      state.currentActiveArticles = action.payload;
    },

    defaultArticleSettings: (state, action) => {
      state.currentActiveArticles = [];
      state.allArticles = articles.articles;
      localStorage.setItem("articles", JSON.stringify(articles.articles));
    },

    addArticle: (state, action) => {
      localStorage.removeItem("articles");

      state.allArticles = [
        ...state.allArticles,
        {
          id: state.allArticles[state.allArticles.length - 1].id + 1,
          text: action.payload,
        },
      ];

      localStorage.setItem("articles", JSON.stringify(state.allArticles));
    },

    findAndDelArticle: (state, action) => {
      localStorage.removeItem("articles");

      state.allArticles = state.allArticles.filter((value) => {
        return value.id !== action.payload;
      });

      localStorage.setItem("articles", JSON.stringify(state.allArticles));
    },

    modifyArticle: (state, action) => {
      state.allArticles[action.payload.index].text = action.payload.newText;
    },
  },
});

export const {
  replaceArticle,
  stickArticle,
  defaultArticleSettings,
  addArticle,
  findAndDelArticle,
  modifyArticle,
} = articlesSlice.actions;

export default articlesSlice.reducer;
