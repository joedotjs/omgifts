import {SET_BUDGET} from './constants';

export const setBudget = (newBudget) => {
  return {
    type: SET_BUDGET,
    newBudget: newBudget
  };
};

// export const setBudget = newBudget => ({
//     type: 'SET_BUDGET',
//     newBudget: newBudget
// });