import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Skills,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </HashRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();

//import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
