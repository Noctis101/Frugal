import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Progress
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import "./styles.css";

class SummaryCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incomeWidth: 0,
      expenseWidth: 0,
      greater: false,
      lesser: false,
      equal: false,
      totalCapital: props.location.state.totalCapital,
      totalExpense: props.location.state.totalExpense
    };
  }

  componentDidMount() {
    if (this.state.totalCapital > this.state.totalExpense) {
      this.goodScenario();
    }
    
    if (this.state.totalCapital < this.state.totalExpense) {
      this.badScenario();
    }
    
    if (this.state.totalCapital === this.state.totalExpense) {
      this.okayScenario();
    }
  }

  goodScenario() {
    let income = 1;
    let expense = 1;

    setInterval(() => {
      if (income <= 60) {
        income++;
        this.setState({incomeWidth: income});
      }
    }, 1)

    setInterval(() => {
      if (expense <= 40) {
        expense++;
        this.setState({expenseWidth: expense});
      }
    }, 1)

    this.setState({ greater: true });
  }

  badScenario() {
    let income = 1;
    let expense = 1;

    setInterval(() => {
      if (income <= 40) {
        income++;
        this.setState({incomeWidth: income});
      }
    }, 1)

    setInterval(() => {
      if (expense <= 60) {
        expense++;
        this.setState({expenseWidth: expense});
      }
    }, 1)

    this.setState({ lesser: true });
  }

  okayScenario() {
    let income = 1;
    let expense = 1;

    setInterval(() => {
      if (income <= 50) {
        income++;
        this.setState({incomeWidth: income});
      }
    }, 1)

    setInterval(() => {
      if (expense <= 50) {
        expense++;
        this.setState({expenseWidth: expense});
      }
    }, 1)

    this.setState({ equal: true });
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
          justifyContent="center"
        >
          <Grid item id="summary-space" xs={12}>
            <Card id="summary"> 
              {this.state.greater ?
                <CardBody>
                  <CardTitle className="summary-title" tag="h1">
                    Great Job!
                    <div className="condition">
                      Your income and savings are greater than your expenses.
                    </div>
                  </CardTitle>
                  <CardSubtitle className="summary-subtitle" tag="h2">
                    You have a good handle on your budget.
                  </CardSubtitle>
                  <CardText>
                    <Progress multi id="compare">
                      <Progress bar className="income" value={this.state.incomeWidth}>
                        ${this.state.totalCapital}
                      </Progress>
                      <Progress bar className="expense" value={this.state.expenseWidth}>
                        ${this.state.totalExpense}
                      </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <div id="back-area">
                    <Link to="/">
                      <Button id="back">
                        Back to Calculator
                      </Button>
                    </Link>
                  </div>
                </CardBody>
                : null}

              {this.state.lesser ?
                <CardBody>
                  <CardTitle className="summary-title" tag="h1">
                    Uh Oh!
                    <div className="condition">
                      Your income and savings are lesser than your expenses.
                    </div>
                  </CardTitle>
                  <CardSubtitle className="summary-subtitle" tag="h2">
                    You need to cut back on your expenses.
                  </CardSubtitle>
                  <CardText>
                    <Progress multi id="compare">
                      <Progress bar className="income" value={this.state.incomeWidth}>
                        ${this.state.totalCapital}
                      </Progress>
                      <Progress bar className="expense" value={this.state.expenseWidth}>
                        ${this.state.totalExpense}
                      </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <div id="back-area">
                    <Link to="/">
                      <Button id="back">
                        Back to Calculator
                      </Button>
                    </Link>
                  </div>
                </CardBody>
                : null}

              {this.state.equal ?
                <CardBody>
                  <CardTitle className="summary-title" tag="h1">
                    Okay...
                    <div className="condition">
                      Your income and savings are equal to your expenses.
                    </div>
                  </CardTitle>
                  <CardSubtitle className="summary-subtitle" tag="h2">
                    Your budget is very tight.
                  </CardSubtitle>
                  <CardText>
                    <Progress multi id="compare">
                      <Progress bar className="income" value={this.state.incomeWidth}>
                        ${this.state.totalCapital}
                        </Progress>
                      <Progress bar className="expense" value={this.state.expenseWidth}>
                        ${this.state.totalExpense}
                        </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <div id="back-area">
                    <Link to="/">
                      <Button id="back">
                        Back to Calculator
                      </Button>
                    </Link>
                  </div>
                </CardBody>
                : null}
            </Card>
          </Grid>   
        </Grid>
      </div>
    )
  }
}

export default withRouter(SummaryCard);