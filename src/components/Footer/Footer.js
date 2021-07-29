import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Grid container id="footer">
          <Grid item xs={12}>Powered by Norus Technologies ©</Grid>
        </Grid>
      </div>
    )
  }
}

export default Footer;