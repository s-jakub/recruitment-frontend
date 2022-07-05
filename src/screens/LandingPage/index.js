import React, { useState } from "react";
import "./LandingPage.styles.css";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import { getRandomValue, isUnique } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import { stickArticle, replaceArticle } from "../../store/slices/articlesSlice";
import ArticlesControl from "../../components/ArticlesControl";

const LandingPage = () => {
  const [choosedOption, setChoosedOption] = useState(null);

  const dispatch = useDispatch();
  const { currentActiveArticles, allArticles } = useSelector(
    (state) => state.articles
  );

  const onChangeValue = (e) => {
    setChoosedOption(Number(e.target.value));
  };

  const chooseRandomArticle = (replace = false) => {
    let random;

    if (replace) {
      random = getRandomValue(allArticles.length);
      return random;
    }

    do {
      random = getRandomValue(allArticles.length);
    } while (!isUnique(currentActiveArticles, allArticles[random]));

    return random;
  };

  const sortDisplayedArticles = (articlesToSort) => {
    return articlesToSort.sort(function (a, b) {
      let x = a.text.toLowerCase();
      let y = b.text.toLowerCase();

      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const addValueHandler = () => {
    let tempArr;

    if (choosedOption === 2 || choosedOption === 1) {
      if (isUnique(currentActiveArticles, allArticles[choosedOption - 1])) {
        tempArr = [...currentActiveArticles, allArticles[choosedOption - 1]];
        dispatch(stickArticle(sortDisplayedArticles(tempArr)));
      } else {
        alert("Ten artykuł już widnieje na stronie");
      }
    }

    if (choosedOption === 3) {
      if (allArticles.length > currentActiveArticles.length) {
        tempArr = [
          ...currentActiveArticles,
          allArticles[chooseRandomArticle()],
        ];
        dispatch(stickArticle(sortDisplayedArticles(tempArr)));
      } else {
        alert("wszystkie artykuły zostały wykorzystane");
      }
    }
  };

  const replaceValueHandler = () => {
    if (choosedOption === 2 || choosedOption === 1)
      dispatch(replaceArticle(choosedOption - 1));

    if (choosedOption === 3)
      dispatch(replaceArticle(chooseRandomArticle(true)));
  };

  return (
    <div className="container">
      <Navbar />
      <Header />
      <main className="wrapper">
        <section className="one">
          <h2 className="title">Blok pierwszy</h2>

          <div className="one__radio-container" onChange={onChangeValue}>
            <div className="one__radio-container__radio-btn">
              <input type="radio" name="options" value="1" id="option1" />
              <label htmlFor="option1">Opcja pierwsza</label>
            </div>
            <div className="one__radio-container__radio-btn">
              <input type="radio" name="options" value="2" id="option2" />
              <label htmlFor="option2">Opcja druga</label>
            </div>
            <div className="one__radio-container__radio-btn">
              <input type="radio" name="options" value="3" id="option3" />
              <label htmlFor="option3">Opcja trzecia</label>
            </div>
          </div>
        </section>

        <section className="two">
          <h2 className="title">Blok drugi</h2>
          <div className="btn-container">
            <Button text="ZASTĄP" callback={replaceValueHandler} />
            <Button text="DOKLEJ" callback={addValueHandler} />
          </div>
        </section>

        <section className="three">
          <h2 className="title">
            blok z długą nazwą która sama się przytnie kiedy jest za długa
          </h2>
          <div className="text">
            {currentActiveArticles.length > 0 &&
              currentActiveArticles.map((value) => {
                return <article key={value.id}>{value.text}</article>;
              })}
          </div>
        </section>
      </main>
      <ArticlesControl />
      <Footer />
    </div>
  );
};

export default LandingPage;
