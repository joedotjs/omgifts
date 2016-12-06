import React, {Component} from 'react';

import store from '../store';
import ManageRecipients from '../components/ManageRecipients';

import {addRecipient, removeRecipient} from '../store/actions/recipient-gift-actions';

class ManageRecipientsContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.addNewRecipient = this.addNewRecipient.bind(this);
    this.removeRecipient = this.removeRecipient.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addNewRecipient(recipientName) {
    store.dispatch(addRecipient(recipientName));
  }

  removeRecipient(recipientName) {
    store.dispatch(removeRecipient(recipientName))
  }

  render() {
    return <ManageRecipients
      recipients={this.state.recipientGifts.map(entry => entry.recipient)}
      addNewRecipient={this.addNewRecipient}
      removeRecipient={this.removeRecipient}
    />;
  }
}

export default ManageRecipientsContainer;
