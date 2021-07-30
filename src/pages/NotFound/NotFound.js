import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="frugal-font">
        <Header/>
        <Grid
          container
          id="not-found-area"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item id="not-found-space" xs={12}>
            <Card id="not-found">
              <CardBody>
                <CardTitle className="not-found-title" tag="h1">
                  Error Code 404 - Page Not Found!
                </CardTitle>
                <CardText className="not-found-text">
                  The page you have requested does not exist.
                  <br/><br/>
                  Please use the button below to go to the budget calculator.
                </CardText>
                <br />
                <Link to="/">
                  <Button id="to-calculator">
                    Go to Calculator
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
        <Footer/>
      </div>
    )
  }
}

export default NotFound;