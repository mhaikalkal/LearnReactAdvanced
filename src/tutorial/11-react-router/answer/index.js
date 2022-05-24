import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";

// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Pakai exact, karena /about /people juga termasuk dari '/' maka nanti waktu kita akses /about, si home juga ikut tampil  */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>

        {/* Placeholder, pake url parameter, /:id, referensi dari id */}
        <Route path="/person/:id" children={<Person />}></Route>

        {/* asteriks = * , artinya semua, maka '/', '/about', dll masuk kesini, jadi error page akan tampil meski ga butuh */}
        {/* cara mengatasinya menggunakan <Switch> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
