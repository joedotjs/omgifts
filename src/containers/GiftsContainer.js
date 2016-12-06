import React, {Component} from 'react';

import store from '../store';
import {updateGift, removeGift, setGiftPrice} from '../store/actions/recipient-gift-actions';

import Gifts from '../components/Gifts';

class GiftsContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
        this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateGift(recipientName, newGiftName) {
    store.dispatch(updateGift(recipientName, newGiftName));
  }

  removeGift(recipientName) {
    store.dispatch(removeGift(recipientName));
  }

  setGiftPrice(recipientName, newPrice) {
    store.dispatch(setGiftPrice(recipientName, newPrice));
  }

  render() {
    return <Gifts
      gifts={this.state.recipientGifts}
      updateGift={this.updateGift}
      removeGift={this.removeGift}
      setGiftPrice={this.setGiftPrice}
    />;
  }

}

export default GiftsContainer;
