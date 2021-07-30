import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/summary/summary";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

export default class Summary extends React.Component {
  render() {
    return(
      <div className="frugal-font">
        <Header/>
        <Card/>
        <Footer/>
      </div>
    )
  }
}