import { Router, Route, Link } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Category from "./Category/Category";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/category" component={Category} />
      </Router>
    </>
  );
};
