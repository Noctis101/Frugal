import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo.png"
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Grid container id="header">
          <Grid className="area" item xs={12}>
            <img id="logo" src={logo} alt=""/>
            <div id="text">Frugal</div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Header;