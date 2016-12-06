import React, {Component} from 'react';
import Budget from '../components/Budget';
import store from '../store';
import {setBudget} from '../store/actions/budget-actions';

export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.increaseBudgetBy100 = this.increaseBudgetBy100.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  increaseBudgetBy100() {
    const newBudget = this.state.budget + 100;
    store.dispatch(setBudget(newBudget));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
      return (
        <div>
          <Budget value={this.state.budget} />
          <button onClick={this.increaseBudgetBy100}>Increase</button>
        </div>
      );
  }

}