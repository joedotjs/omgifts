import React from 'react';

const RecipientEntry = (props) => {
  return (
    <div className="recipient-entry">
      <h2>{props.name}</h2>
      <button
        onClick={() => props.removeRecipient(props.name)}>
        Remove
      </button>
    </div>
  );
};

export default RecipientEntry;
