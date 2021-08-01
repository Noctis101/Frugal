import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Progress
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./styles.css";

class SummaryCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incomeWidth: 60,
      expenseWidth: 40,
      greater: false,
      lesser: false,
      equal: false,
    };
  }

  componentDidMount() {
    if (this.props.totalCapital > this.props.totalExpense) {
      this.goodScenario();
    } else if (this.props.totalCapital < this.props.totalExpense) {
      this.badScenario();
    } else if (this.props.totalCapital === this.props.totalExpense) {
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
    console.log(this.props.totalCapital, this.props.totalExpense)
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
                      <Progress bar id="income" value={this.state.incomeWidth}>
                        ${this.props.totalCapital}
                      </Progress>
                      <Progress bar id="expense" value={this.state.expenseWidth}>
                        ${this.props.totalExpense}
                      </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <Link to="/">
                    <Button id="back">
                      Back to Calculator
                    </Button>
                  </Link>
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
                    <Progress multi id="bar">
                      <Progress bar color="warning" value={this.state.incomeWidth}>
                        ${this.props.totalCapital}
                      </Progress>
                      <Progress bar color="danger" value={this.state.expenseWidth}>
                        ${this.props.totalExpense}
                      </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <Link to="/">
                    <Button id="back">
                      Back to Calculator
                    </Button>
                  </Link>
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
                    <Progress multi id="bar">
                      <Progress bar color="warning" value={this.state.incomeWidth}>
                        ${this.props.totalCapital}
                        </Progress>
                      <Progress bar color="danger" value={this.state.expenseWidth}>
                        ${this.props.totalExpense}
                        </Progress>
                    </Progress>
                  </CardText>
                  <br/>
                  <Link to="/">
                    <Button id="back">
                      Back to Calculator
                    </Button>
                  </Link>
                </CardBody>
                : null}
            </Card>
          </Grid>   
        </Grid>
      </div>
    )
  }
}

export default SummaryCard;