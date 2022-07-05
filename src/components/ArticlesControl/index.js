import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addArticle,
  findAndDelArticle,
  modifyArticle,
} from "../../store/slices/articlesSlice";
import "./ArticlesControl.styles.css";

const ArticlesControl = () => {
  const [article, setArticle] = useState("");
  const [delArticle, setDelArticle] = useState("1");
  const [articleId, setArticleId] = useState();
  const [articleText, setArticleText] = useState("");
  const [articleIdx, setArticleIdx] = useState(0);

  const { allArticles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    let article =
      allArticles &&
      allArticles.find((value) => {
        return value.id === Number(articleId);
      });

    let index =
      allArticles &&
      allArticles.findIndex((value) => {
        return value.id === Number(articleId);
      });

    setArticleIdx(index);
    article && setArticleText(article.text);
  }, [articleId, allArticles]);

  const addArticleHandler = (e) => {
    e.preventDefault();
    dispatch(addArticle(article));
    setArticle("");
  };

  const delArticleHandler = (e) => {
    e.preventDefault();
    dispatch(findAndDelArticle(Number(delArticle)));
    setDelArticle("1");
  };

  const modifyArticleHandler = (e) => {
    e.preventDefault();
    dispatch(modifyArticle({ newText: articleText, index: articleIdx }));
  };

  return (
    <div className="articles-control">
      <form className="form add-article" onSubmit={addArticleHandler}>
        <p>Dodaj artykuł</p>
        <input
          type="text"
          placeholder="treść artykułu"
          required
          onChange={(e) => setArticle(e.target.value)}
          value={article}
        />
        <button className="btn" type="submit">
          Dodaj
        </button>
      </form>

      <form className="form del-article" onSubmit={delArticleHandler}>
        <p>Usuń artykuł</p>
        <select
          name="article"
          id="article"
          value={delArticle}
          onChange={(e) => setDelArticle(e.target.value)}
        >
          {allArticles &&
            allArticles.map((value) => {
              return (
                <option key={value.id} value={value.id}>
                  {value.text}
                </option>
              );
            })}
        </select>
        <button className="btn" type="submit">
          Usuń
        </button>
      </form>

      <form onSubmit={modifyArticleHandler}>
        <p>Modyfikuj artykuł</p>
        <select
          name="article"
          id="article"
          value={articleId}
          onChange={(e) => setArticleId(e.target.value)}
        >
          {allArticles &&
            allArticles.map((value) => {
              return (
                <option key={value.id} value={value.id}>
                  {value.id}
                </option>
              );
            })}
        </select>
        <textarea
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
        >
          {articleText}
        </textarea>
        <button className="btn">Modyfikuj</button>
      </form>
    </div>
  );
};

export default ArticlesControl;
