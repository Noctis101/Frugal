import React from "react";
import Calculator from "./calculator/calculator";
import Header from "./Header/Header";
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