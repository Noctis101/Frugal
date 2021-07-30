import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, Button, InputGroup,
  InputGroupAddon, InputGroupText,
  Input, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./styles.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.toggleIncome = this.toggleIncome.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleSavings = this.toggleSavings.bind(this);
    this.changeIncomeType = this.changeIncomeType.bind(this);
    this.changeSavingsType = this.changeSavingsType.bind(this);
    this.changeExpenseType = this.changeExpenseType.bind(this);
    // this.handleIncomeChange = this.handleIncomeChange.bind(this);
    // this.handleIncomeChange = this.handleIncomeChange.bind(this);
    // this.handleIncomeChange = this.handleIncomeChange.bind(this);

    this.state = {
      incomeDropdownOpen: false,
      incomeList: [
        { id: 'salary', type: 'Salary', amount: 0 },
        { id: 'other', type: 'Other', amount: 0 }
      ],
      incomeType: 'Select Income Type',
      incomeAmount: '',

      savingsDropdownOpen: false,
      savingsList: [
        { id: 'investment', type: 'Investments', amount: 0 },
        { id: 'pension', type: 'Pension', amount: 0 },
        { id: 'emergency', type: 'Emergency', amount: 0 },
        { id: 'other', type: 'Other', amount: 0 }
      ],
      savingsType: 'Select Savings Type',
      savingsAmount: '',

      expenseDropdownOpen: false,
      expenseList: [
        { id: 'bills', type: 'Bills', amount: 0 },
        { id: 'food', type: 'Food', amount: 0 },
        { id: 'school', type: 'School Fees', amount: 0 },
        { id: 'loans', type: 'Loans', amount: 0 },
        { id: 'transportation', type: 'Transportation Cost', amount: 0 },
        { id: 'other', type: 'Other', amount: 0 }
      ],
      expenseType: 'Select Expense Type',
      expenseAmount: ''
    };
  }

  toggleIncome() {
    this.setState({
      incomeDropdownOpen: !this.state.incomeDropdownOpen
    });
  }

  toggleExpense() {
    this.setState({
      expenseDropdownOpen: !this.state.expenseDropdownOpen
    });
  }

  toggleSavings() {
    this.setState({
      savingsDropdownOpen: !this.state.savingsDropdownOpen
    });
  }

  changeIncomeType(e) {
    this.setState({incomeType: e.currentTarget.textContent});
  }

  changeSavingsType(e) {
    this.setState({savingsType: e.currentTarget.textContent});
  }

  changeExpenseType(e) {
    this.setState({expenseType: e.currentTarget.textContent});
  }

  // handleIncomeChange(e) {
  //   e.target.value;

  //   this.setState({});
  // }

  // handleSavingsChange(e) {
  //   e.target.value;

  //   this.setState({});
  // }

  // handleExpenseChange(e) {
  //   e.target.value;

  //   this.setState({});
  // }

  render() {
    return (
      <div>
        <Grid
          container
          id="calc-area"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item id="calc-space" xs={12}>
            <Card id="calculator">
              <CardBody>
                <CardTitle id="calc-title" tag="h6">
                  Please enter your details below
                </CardTitle>
                <CardText id="calc-form">
                  <div className="horizontal">
                    <Dropdown
                      className="dropdown"
                      isOpen={this.state.incomeDropdownOpen}
                      toggle={this.toggleIncome}
                    >
                      <DropdownToggle className="button" caret>
                        {this.state.incomeType}
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.incomeList.map(e => {
                          return <DropdownItem name={e.id} onClick={this.changeIncomeType}>
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    <Button className="add">Add</Button>
                  </div>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="amount"
                      type="number"
                      value={this.state.incomeAmount}
                      placeholder="e.g. 100000"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                  <div className="horizontal">
                    <Dropdown
                      className="dropdown"
                      isOpen={this.state.savingsDropdownOpen}
                      toggle={this.toggleSavings}
                    >
                      <DropdownToggle className="button" caret>
                        {this.state.savingsType}
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.savingsList.map(e => {
                          return <DropdownItem name={e.id} onClick={this.changeSavingsType}>
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    <Button className="add">Add</Button>
                  </div>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="amount"
                      type="number"
                      value={this.state.savingsAmount}
                      placeholder="e.g. 100000"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                  <div className="horizontal">
                    <Dropdown
                      className="dropdown"
                      isOpen={this.state.expenseDropdownOpen}
                      toggle={this.toggleExpense}
                    >
                      <DropdownToggle className="button" caret>
                        {this.state.expenseType}
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.expenseList.map(e => {
                          return <DropdownItem name={e.id} onClick={this.changeExpenseType}>
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    <Button className="add">Add</Button>
                  </div>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText id="expense-prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="amount"
                      type="number"
                      value={this.state.expenseAmount}
                      placeholder="e.g. 100000"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </CardText>
                <Button id="view">View Input List</Button>
                <br />
                <Link to="/summary">
                  <Button id="submit">
                    Submit
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