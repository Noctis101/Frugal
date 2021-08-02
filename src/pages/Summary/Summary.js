import React from "react";
import { withRouter } from "react-router";
import Header from "../../components/Header/Header";
import SummaryCard from "../../components/summary/summary";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class Summary extends React.Component {
  render() {
    return(
      <div className="frugal-font">
        <Header/>
        <SummaryCard/>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Summary);