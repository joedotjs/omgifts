const initialState = {
    budget: 0,
    counter: 0
};

import {SET_BUDGET, INCREMENT} from './actions/constants';

export default function (state = initialState, action) {

  let newState;

  switch (action.type) {

    case SET_BUDGET:
      newState = Object.assign({}, state);
      newState.budget = action.newBudget;
      break;

    case INCREMENT:
      newState = Object.assign({}, state);
      newState.counter = newState.counter + 1;
      break;

    default:
      return state;

  }

  return newState;

};