import React from "react";
import "./home.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

const Home = () => {
  return (
    <div>
      <h1 className="tab-header">ホイアンって?</h1>
      <p style={{ margin: "0px 10px" }}>
        ホイアンは、ベトナム中部のダナンの近くにある観光都市の一つで世界遺産に登録されています。日本
        や中国と歴史的に強いつながりがあり、来遠橋(日本橋)などの日本と縁が深い歴史的建造物や、ベトナムの文化体験が出来ます。
      </p>
    </div>
  );
  //  }
};

export default Home;
