import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/Home/Home";
import SummaryPage from "./pages/Summary/Summary";
import NotFound from "./pages/NotFound/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/summary" component={SummaryPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
