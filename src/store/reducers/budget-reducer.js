const initialState = 150;

import {SET_BUDGET} from '../actions/constants';

export default function (state = initialState, action) {

  switch (action.type) {

    case SET_BUDGET:
      return action.newBudget;

    default:
      return state;

  }

}