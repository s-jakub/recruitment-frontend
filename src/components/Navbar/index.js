import React from "react";
import "./Navbar.styles.css";
import { AiFillHtml5 } from "react-icons/ai";

import { useSelector } from "react-redux";

const Navbar = () => {
  const { personalDataFlag } = useSelector((state) => state.personalData);

  return (
    <>
      <header className="header">
        <a href="/" className="header__logo">
          <AiFillHtml5
            style={{ width: "100%", height: "100%", color: "#fff" }}
          />
        </a>
        <div className="header__text">
          <p>
            Zadanie <strong>rekrutacyjne</strong>
          </p>
          {personalDataFlag && <p>Jakub Siwek</p>}
        </div>
      </header>
      <div style={{ paddingTop: "105px" }}></div>
    </>
  );
};

export default Navbar;
