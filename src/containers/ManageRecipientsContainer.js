import React, {Component} from 'react';
import ManageRecipients from '../components/ManageRecipients';
import {addRecipient, removeRecipient} from '../store/actions/recipient-gift-actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    recipients: state.recipientGifts.map(entry => entry.recipient)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewRecipient(recipientName) {
      dispatch(addRecipient(recipientName));
    },
    removeRecipient(recipientName) {
      dispatch(removeRecipient(recipientName))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipients);