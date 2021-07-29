import React from "react";
import Header from "../../components/Header/Header";
import Calculator from "../../components/calculator/calculator";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

export default class Home extends React.Component {
  render() {
    return(
      <div className="frugal-font">
        <Header/>
        <Calculator/>
        <Footer/>
      </div>
    )
  }
}