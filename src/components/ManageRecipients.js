import React from 'react';

import RecipientEntry from './RecipientEntry';
import AddNewRecipient from './AddNewRecipient';

const ManageRecipients = (props) => {
  return (
    <section id="manage-recipients">
      {props.recipients.map((name, i) => {
        return <RecipientEntry name={name} key={i} removeRecipient={props.removeRecipient} />
      })}
      <AddNewRecipient addNewRecipient={props.addNewRecipient} />
    </section>
  );
};

export default ManageRecipients;
