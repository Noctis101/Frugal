import React from "react";
import { Grid } from "@material-ui/core/";
import {
  Card, CardText, CardBody,
  CardTitle, Button, InputGroup,
  InputGroupAddon, InputGroupText,
  Input, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, Modal
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Income from "../DetailsList/income/income";
import Savings from "../DetailsList/savings/savings";
import Expenses from "../DetailsList/expenses/expenses";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

library.add(faTrash)

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.toggleIncome = this.toggleIncome.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleSavings = this.toggleSavings.bind(this);

    this.changeIncomeType = this.changeIncomeType.bind(this);
    this.changeSavingsType = this.changeSavingsType.bind(this);
    this.changeExpenseType = this.changeExpenseType.bind(this);

    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleSavingsChange = this.handleSavingsChange.bind(this);
    this.handleExpenseChange = this.handleExpenseChange.bind(this);

    this.addToIncomeList = this.addToIncomeList.bind(this);
    this.deleteFromIncomeList = this.deleteFromIncomeList.bind(this);
    this.updateIncomeList = this.updateIncomeList.bind(this);

    this.addToSavingsList = this.addToSavingsList.bind(this);
    this.deleteFromSavingsList = this.deleteFromSavingsList.bind(this);
    this.updateSavingsList = this.updateSavingsList.bind(this);

    this.addToExpenseList = this.addToExpenseList.bind(this);
    this.deleteFromExpenseList = this.deleteFromExpenseList.bind(this);
    this.updateExpenseList = this.updateExpenseList.bind(this);

    this.calculateTotals = this.calculateTotals.bind(this);

    this.state = {
      modal: false,

      incomeDropdownOpen: false,
      incomeMenu: [
        { id: 'salary', type: 'Salary', selected: false },
        { id: 'other', type: 'Other', selected: false }
      ],
      incomeId: '',
      incomeType: 'Select Income Type',
      incomeAmount: '',
      incomeList: [],

      savingsDropdownOpen: false,
      savingsMenu: [
        { id: 'investment', type: 'Investments', selected: false },
        { id: 'pension', type: 'Pension', selected: false },
        { id: 'emergency', type: 'Emergency', selected: false },
        { id: 'other', type: 'Other', selected: false }
      ],
      savingsId: '',
      savingsType: 'Select Savings Type',
      savingsAmount: '',
      savingsList: [],

      expenseDropdownOpen: false,
      expenseMenu: [
        { id: 'bills', type: 'Bills', selected: false },
        { id: 'food', type: 'Food', selected: false },
        { id: 'school', type: 'School Fees', selected: false },
        { id: 'loans', type: 'Loans', selected: false },
        { id: 'transportation', type: 'Transportation', selected: false },
        { id: 'other', type: 'Other', selected: false }
      ],
      expenseId: '',
      expenseType: 'Select Expense Type',
      expenseAmount: '',
      expenseList: [],

      totalCapital: 0,
      totalExpense: 0
    };
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
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
    this.state.incomeMenu.forEach(function (item) {
      if (item.id === e.currentTarget.name) {
        item.selected = true;
      }
    });

    this.setState({
      incomeId: e.currentTarget.name,
      incomeType: e.currentTarget.textContent
    });
  }

  changeSavingsType(e) {
    this.state.savingsMenu.forEach(function (item) {
      if (item.id === e.currentTarget.name) {
        item.selected = true;
      }
    });

    this.setState({
      savingsId: e.currentTarget.name,
      savingsType: e.currentTarget.textContent
    });
  }

  changeExpenseType(e) {
    this.state.expenseMenu.forEach(function (item) {
      if (item.id === e.currentTarget.name) {
        item.selected = true;
      }
    });

    this.setState({
      expenseId: e.currentTarget.name,
      expenseType: e.currentTarget.textContent
    });
  }

  handleIncomeChange(e) {
    if (e.target.value !== '' && e.target.value >= 1) {
      this.setState({incomeAmount: e.target.value});
    } else if (e.target.value === '' || e.target.value < 1) {
      this.setState({incomeAmount: ''});
    }
  }

  handleSavingsChange(e) {
    if (e.target.value !== '' && e.target.value >= 1) {
      this.setState({savingsAmount: e.target.value});
    } else if (e.target.value === '' || e.target.value < 1) {
      this.setState({savingsAmount: ''});
    }
  }

  handleExpenseChange(e) {
    if (e.target.value !== '' && e.target.value >= 1) {
      this.setState({expenseAmount: e.target.value});
    } else if (e.target.value === '' || e.target.value < 1) {
      this.setState({expenseAmount: ''});
    }
  }

  addToIncomeList() {
    const newItem = {
      id: this.state.incomeId,
      type: this.state.incomeType,
      amount: this.state.incomeAmount
    }

    const incomeList = [...this.state.incomeList, newItem];

    this.setState({
      incomeList: incomeList,
      incomeId: '',
      incomeType: 'Select Income Type',
      incomeAmount: '' 
    });
  }

  addToSavingsList() {
    const newItem = {
      id: this.state.savingsId,
      type: this.state.savingsType,
      amount: this.state.savingsAmount
    }

    const savingsList = [...this.state.savingsList, newItem];

    this.setState({
      savingsList: savingsList,
      savingsId: '',
      savingsType: 'Select Savings Type',
      savingsAmount: '' 
    });
  }

  addToExpenseList() {
    const newItem = {
      id: this.state.expenseId,
      type: this.state.expenseType,
      amount: this.state.expenseAmount
    }

    const expenseList = [...this.state.expenseList, newItem];

    this.setState({
      expenseList: expenseList,
      expenseId: '',
      expenseType: 'Select Expense Type',
      expenseAmount: '' 
    });
  }

  deleteFromIncomeList(id) {
    this.state.incomeMenu.forEach(function (item) {
      if (item.id === id) {
        item.selected = false;
      }
    });

    const filteredList = this.state.incomeList.filter(item => item.id !== id);

    this.setState({
      incomeList: filteredList
    })
  }

  deleteFromSavingsList(id) {
    this.state.savingsMenu.forEach(function (item) {
      if (item.id === id) {
        item.selected = false;
      }
    });

    const filteredList = this.state.savingsList.filter(item => item.id !== id);

    this.setState({
      savingsList: filteredList
    })
  }

  deleteFromExpenseList(id) {
    this.state.expenseMenu.forEach(function (item) {
      if (item.id === id) {
        item.selected = false;
      }
    });

    const filteredList = this.state.expenseList.filter(item => item.id !== id);

    this.setState({
      expenseList: filteredList
    })
  }

  updateIncomeList(id, amount) {
    this.state.incomeList.forEach(function (item) {      
      if (item.id === id) {
        item.amount = amount;
      }
    })

    this.setState({
      incomeList: this.state.incomeList
    })
  }

  updateSavingsList(id, amount) {
    this.state.savingsList.forEach(function (item) {      
      if (item.id === id) {
        item.amount = amount;
      }
    })

    this.setState({
      savingsList: this.state.savingsList
    })
  }

  updateExpenseList(id, amount) {
    this.state.expenseList.forEach(function (item) {      
      if (item.id === id) {
        item.amount = amount;
      }
    })

    this.setState({
      expenseList: this.state.expenseList
    })
  }

   calculateTotals() {
    let incomeAmount = 0;
    let expenseAmount = 0;

    let totalIncome = 0;
    let totalSavings = 0;
    let totalCapital = 0;
    let totalExpense = 0;

    this.state.incomeList.forEach(function (item) {
      incomeAmount = parseInt(item.amount);
      totalIncome += incomeAmount;
    })

    if (this.state.savingsList.length) {
      let savingsAmount = 0;

      this.state.savingsList.forEach(function (item) {
        savingsAmount = parseInt(item.amount);
        totalSavings += savingsAmount;
      })
    }

    totalCapital = totalIncome + totalSavings;

    this.state.expenseList.forEach(function (item) {
      expenseAmount = parseInt(item.amount);
      totalExpense += expenseAmount;
    })

    this.setState({
      totalCapital: totalCapital,
      totalExpense: totalExpense
    }, () => {
      this.props.history.push("/summary", { 
        totalCapital: this.state.totalCapital,
        totalExpense: this.state.totalExpense
      });
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
          justifyContent="center"
        >
          <Grid item id="calc-space" xs={12}>
            <Card id="calculator">
              <CardBody>
                <CardTitle id="calc-title" tag="h6">
                  Please enter your monthly income, savings and expenses.
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
                        {this.state.incomeMenu.map(e => {
                          return <DropdownItem
                            disabled={e.selected}
                            name={e.id} key={e.id}
                            onClick={this.changeIncomeType}
                          >
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    {this.state.incomeType !== 'Select Income Type' && this.state.incomeAmount !== '' ?
                      <Button
                        className="add"
                        onClick={this.addToIncomeList}
                      >
                        Add
                      </Button>
                    : null}
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
                      onChange={this.handleIncomeChange}
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
                        {this.state.savingsMenu.map(e => {
                          return <DropdownItem
                            disabled={e.selected}
                            name={e.id}
                            key={e.id}
                            onClick={this.changeSavingsType}
                          >
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    {this.state.savingsType !== 'Select Savings Type' && this.state.savingsAmount !== '' ?
                      <Button className="add" onClick={this.addToSavingsList}>
                        Add
                      </Button>
                    : null}
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
                      onChange={this.handleSavingsChange}
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
                        {this.state.expenseMenu.map(e => {
                          return <DropdownItem
                            disabled={e.selected}
                            name={e.id}
                            key={e.id}
                            onClick={this.changeExpenseType}
                          >
                            {e.type}
                          </DropdownItem>
                        })}
                      </DropdownMenu>
                    </Dropdown>
                    {this.state.expenseType !== 'Select Expense Type' && this.state.expenseAmount !== '' ?
                      <Button className="add" onClick={this.addToExpenseList}>
                        Add
                      </Button>
                    : null}
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
                      onChange={this.handleExpenseChange}
                    />
                  </InputGroup>
                </CardText>
                <div id="view-area">
                  <Button id="view" onClick={this.toggleModal}>
                    View Details List
                  </Button>
                </div>
                {this.state.incomeList.length && this.state.expenseList.length ?
                  <div id="calculate-area">
                    <Button id="calculate" onClick={this.calculateTotals}>
                      Calculate
                    </Button>
                  </div>
                : null }
              </CardBody>
            </Card>
          </Grid>   
        </Grid>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          centered={true}
          id="list-modal"
        >
          <div id="list">
            <div className="title">Income</div>
            {this.state.incomeList.length ?
              <Income
                incomeList={this.state.incomeList}
                deleteFromIncomeList={this.deleteFromIncomeList}
                updateIncomeList={this.updateIncomeList}
              />
              :
              <div className="empty">No Items Entered</div>
            }
            <div className="title">Savings</div>
            {this.state.savingsList.length ?
              <Savings
                savingsList={this.state.savingsList}
                deleteFromSavingsList={this.deleteFromSavingsList}
                updateSavingsList={this.updateSavingsList}
              />
              :
              <div className="empty">No Items Entered</div>
            }
            <div className="title">Expenses</div>
            {this.state.expenseList.length ?
              <Expenses
                expenseList={this.state.expenseList}
                deleteFromExpenseList={this.deleteFromExpenseList}
                updateExpenseList={this.updateExpenseList}
              />
              :
              <div className="empty">No Items Entered</div>
            }
            <div id="close">
              <Button id="close-button" onClick={this.toggleModal}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Calculator);