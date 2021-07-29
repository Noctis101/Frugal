import React from "react";
import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import "./styles.css";

export default class Login extends React.Component {
  render() {
    return(
      <div className="frugal-font">
        <Header/>
        
        <Footer/>
      </div>
    )
  }
}