import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo.png"
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Grid container id="header">
          <Grid item className="area" xs={12}>
            <img id="logo" src={logo} alt=""/>
            <div id="appName">Frugal</div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Header;