import React from "react";
import "./Footer.styles.css";

import { MdKeyboardArrowUp } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import {
  defaultPersonalSettings,
  setToTrue,
} from "../../store/slices/personalDataSlice";
import { defaultArticleSettings } from "../../store/slices/articlesSlice";

const Footer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 960px)" });
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="square">
        CSS <br /> IS <br /> AWESOME
      </div>
      {isDesktop && <div className="company-name">nabthat</div>}
      <div className="dropdown">
        <input type="checkbox" id="dropdown-menu" />
        <label htmlFor="dropdown-menu" className="dropdown__dropdown-menu">
          POKAŻ
          <span>
            <MdKeyboardArrowUp />
          </span>
        </label>
        <div className="dropdown__menu-content">
          <ul>
            <li
              onClick={() => {
                dispatch(defaultArticleSettings());
                dispatch(defaultPersonalSettings());
              }}
            >
              <div className="arrow">
                <MdKeyboardArrowUp />
              </div>
              <span>ZRESETUJ USTAWIENIA</span>
            </li>
            <li onClick={() => dispatch(setToTrue())}>
              <div className="arrow">
                <MdKeyboardArrowUp />
              </div>
              <span> POKAŻ DANE OSOBOWE </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
