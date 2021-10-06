import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Library from "./Components/Library/Library.js";
import Academics from "./Components/Academics/Academics.js";
import Navigation from "./Components/Navigation/Navigation";
import CourseName from "./Components/Academics/Courses/CourseName.js";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/academics">
            <Academics />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route exact path="/Astronomy">
            <CourseName name='Astronomy' />
          </Route>
          <Route exact path="/Alchemy">
            <CourseName name='Alchemy' />
          </Route>
          <Route exact path="/Ancient_Runes">
            <CourseName name='Ancient_Runes' />
          </Route>
          <Route exact path="/Ancient_Studies">
            <CourseName name='Ancient_Studies' />
          </Route>
          <Route exact path="/O.W.L">
            <CourseName name='O.W.L' />
          </Route>
          <Route exact path="/Charms">
            <CourseName name='Charms' />
          </Route>
          <Route exact path="/Defence_Against_Dark_Arts">
            <CourseName name='Defence_Against_Dark_Arts' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
