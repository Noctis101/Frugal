import React from "react";
import Display from "./components/Display";
import "./App.css";

export default class App extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: 'black'}} className="frugal">
        <Display/>
      </div>
    );
  }
}