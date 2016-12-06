import {SET_BUDGET} from './constants';

export const setBudget = newBudget => ({
    type: SET_BUDGET,
    newBudget: newBudget
});