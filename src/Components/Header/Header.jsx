import React from "react";
import "./Header.css";

const Header = ({ heading }) => {
  return (
    <>
      <section className="header">
        <div className="heading">
          <h2>{heading}</h2>
        </div>
      </section>
    </>
  );
};
export default Header;
