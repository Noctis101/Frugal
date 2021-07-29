import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, Button, InputGroup,
  InputGroupAddon, InputGroupText,
  Input, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'reactstrap';
import "./styles.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.toggleIncome = this.toggleIncome.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleSavings = this.toggleSavings.bind(this);

    this.state = {
      incomeDropdownOpen: false,
      incomeDropdownValue: '',
      expenseDropdownOpen: false,
      savingsDropdownOpen: false
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
                <CardTitle id="calc-title" tag="h6">Please fill out the fields below</CardTitle>
                <CardText id="calc-form">
                  <Dropdown
                    className="dropdown"
                    isOpen={this.state.incomeDropdownOpen}
                    toggle={this.toggleIncome}
                  >
                    <DropdownToggle className="button" caret>
                      Select Income Type
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Salary</DropdownItem>
                      <DropdownItem>Other</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input className="amount"/>
                  </InputGroup>
                  <Dropdown
                    className="dropdown"
                    isOpen={this.state.expenseDropdownOpen}
                    toggle={this.toggleExpense}
                  >
                    <DropdownToggle className="button" caret>
                      Select Expense Type
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Bills</DropdownItem>
                      <DropdownItem>Food</DropdownItem>
                      <DropdownItem>School Fees</DropdownItem>
                      <DropdownItem>Loans</DropdownItem>
                      <DropdownItem>Transportation Cost</DropdownItem>
                      <DropdownItem>Other</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input className="amount"/>
                  </InputGroup>
                  <Dropdown
                    className="dropdown"
                    isOpen={this.state.savingsDropdownOpen}
                    toggle={this.toggleSavings}
                  >
                    <DropdownToggle className="button" caret>
                      Select Savings Type
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Investments</DropdownItem>
                      <DropdownItem>Pension</DropdownItem>
                      <DropdownItem>Emergency Fund</DropdownItem>
                      <DropdownItem>Other</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="prepend">Amount</InputGroupText>
                    </InputGroupAddon>
                    <Input className="amount"/>
                  </InputGroup>
                </CardText>
                <Button id="view">View Input List</Button>
                <br />
                <Button id="submit">Submit</Button>
              </CardBody>
            </Card>
          </Grid>   
        </Grid>
      </div>
    )
  }
}

export default Calculator;