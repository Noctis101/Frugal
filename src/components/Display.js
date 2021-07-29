import React from "react";
import Header from "./Header/Header";
import Calculator from "./calculator/calculator";
import Footer from "./Footer/Footer";

export default class Display extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Calculator/>
        <Footer/>
      </div>
    )
  }
}