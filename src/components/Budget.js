import React from 'react';

const getGiftTotal = gifts => {
  return gifts
    .map(g => g.price)
    .reduce((sum, price) => sum + price, 0);
};

const getPercentage = (n, m) => {
  const result = ((n / m) * 100).toFixed(2);
  return `${result}%`;
};

const Budget = (props) => {
  const giftTotal = getGiftTotal(props.gifts);
  const budgetPercentage = getPercentage(giftTotal, props.budget);
  return (
    <form onSubmit={props.submitNewBudget}>
      <h1>Your current budget is {props.budget}</h1>
      <h2>The total of all of your gifts is {giftTotal}.</h2>
      <h2>You have used {budgetPercentage} of your budget.</h2>
      <div>
        <label>Update budget to:</label>
        <input type="number" onChange={props.updateNewBudget} />
      </div>
      <button type="submit">Submit new budget</button>
    </form>
  );
};

export default Budget;
