import React from "react";
import Display from "./components/Display";
import "./App.css";

export default class App extends React.Component {

  render() {
    return (
      <div className="frugal">
        <Display/>
      </div>
    );
  }
}