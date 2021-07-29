import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Progress
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./styles.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Grid
          container
          id="summary-area"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item id="summary-space" xs={12}>
            <Card id="summary">
              <CardBody>
                <CardTitle id="summary-title" tag="h5">Great Job!</CardTitle>
                <CardSubtitle id="summary-subtitle" tag="h6">
                  You have a good handle of your budget
                </CardSubtitle>
                <CardText>
                <Progress multi>
                  <Progress animated bar color="warning" value="75">Total Income + Savings</Progress>
                  <Progress animated bar color="danger" value="25">Total Expenses</Progress>
                </Progress>
                </CardText>
                <br />
                <Link to="/">
                  <Button id="back">
                    Back to Calculator
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Grid>   
        </Grid>
      </div>
    )
  }
}

export default Calculator;