import React from "react";
import Header from "../../components/Header/Header";
import Table from "../../components/summary/summary";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

export default class Summary extends React.Component {
  render() {
    return(
      <div className="frugal-font">
        <Header/>
        <Table/>
        <Footer/>
      </div>
    )
  }
}