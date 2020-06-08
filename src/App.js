import React from "react";
import Home from "./page/home";
import Foods from "./page/foods";
import Tradition from "./page/tradition";
import Experience from "./page/experience";
//import "./App.css";
import TopPic from "./page/pic/top.jpg";
import "bulma/css/bulma.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const TabLink = ({ to, children, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      return (
        <li className={match ? "is-active" : ""}>
          <Link to={to} style={{ color: "#282c34" }}>
            {children}
          </Link>
        </li>
      );
    }}
  />
);

const App = () => (
  <Router>
    <header>
      <h1
        className="title"
        style={{
          color: "#282c34",
          position: "absolute",
          maxWidth: "50%",
          top: "-25px",
          left: "270px",
          fontSize: "100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        Let's GO Hoian
      </h1>
      <img src={TopPic} style={{ width: "100%" }} />
    </header>
    <section
      className="hero is-primary is-bold"
      style={{ backgroundColor: "#99FFFF", backgroundImage: "none" }}
    >
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <TabLink to="/" exact>
                Top
              </TabLink>
              <TabLink to="/tradition" exact>
                伝統物
              </TabLink>
              <TabLink to="/experience" exact>
                体験しよう
              </TabLink>
              <TabLink to="/foods" exact>
                食べ物・お店
              </TabLink>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/foods" component={Foods} />
      <Route path="/experience" component={Experience} />
      <Route path="/tradition" component={Tradition} />
    </div>
    　　
    {/*}
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>ホイアンツアーのリンクはこちら⇓</p>
        </div>
      </div>
        </footer>*/}
  </Router>
);
export default App;
