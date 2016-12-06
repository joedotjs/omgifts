import {combineReducers} from 'redux';

import recipientGiftsReducer from './recipient-gifts-reducer';
import budgetReducer from './budget-reducer';

export default combineReducers({
  recipientGifts: recipientGiftsReducer,
  budget: budgetReducer
});