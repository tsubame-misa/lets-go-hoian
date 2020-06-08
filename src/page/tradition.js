import React from "react";
import "./home.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

const Tradition = () => {
  return (
    <div>
      <h1 className="tab-header">伝統物</h1>
      <p style={{ margin: "0px 10px" }}>歴史ある場所や物を紹介していきます</p>
    </div>
  );
};

export default Tradition;
