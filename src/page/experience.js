import React from "react";
import "./home.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

const experience = () => {
  return (
    <div>
      <h1 className="tab-header">体験しよう</h1>
      <p style={{ margin: "0px 10px" }}>
        体験型の観光スポットを紹介していきます
      </p>
    </div>
  );
};

export default experience;
