import React, {Component} from 'react';

import store from '../store';
import {setBudget} from '../store/actions/budget-actions';

import Budget from '../components/Budget'

class BudgetContainer extends Component {

  constructor() {
    super();
    this.setCurrentBudgetToState(true);
    this.updateNewBudget = this.updateNewBudget.bind(this);
    this.submitNewBudget = this.submitNewBudget.bind(this);
  }

  setCurrentBudgetToState(init) {

    const currentBudget = store.getState().budget;
    const newStateObj = Object.assign({
      newBudget: currentBudget
    }, store.getState());

    if (init) {
      this.state = newStateObj;
    } else {
      this.setState(newStateObj);
    }

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setCurrentBudgetToState();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateNewBudget(e) {
    this.setState({
      newBudget: parseInt(e.target.value, 10)
    });
  }

  submitNewBudget(e) {
    e.preventDefault();
    store.dispatch(setBudget(this.state.newBudget));
  }

  render() {
    return <Budget
      budget={this.state.budget}
      gifts={this.state.recipientGifts}
      updateNewBudget={this.updateNewBudget}
      submitNewBudget={this.submitNewBudget}
    />;
  }

}

export default BudgetContainer;
