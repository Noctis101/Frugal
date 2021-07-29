import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import SummaryPage from "./pages/Summary/Summary";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/summary">
          <SummaryPage/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}