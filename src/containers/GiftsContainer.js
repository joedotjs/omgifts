import React, {Component} from 'react';

import {connect} from 'react-redux';
import {updateGift, removeGift, setGiftPrice} from '../store/actions/recipient-gift-actions';

import Gifts from '../components/Gifts';

const mapStateToProps = state =>  {
  return {
    gifts: state.recipientGifts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateGift(recipientName, newGiftName) {
      dispatch(updateGift(recipientName, newGiftName));
    },
    removeGift(recipientName) {
      dispatch(removeGift(recipientName));
    },
    setGiftPrice(recipientName, newPrice) {
      dispatch(setGiftPrice(recipientName, newPrice));
    }
  };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Gifts);
