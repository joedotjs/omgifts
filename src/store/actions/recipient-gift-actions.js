import {
  ADD_RECIPIENT,
  REMOVE_RECIPIENT,
  UPDATE_GIFT,
  REMOVE_GIFT,
  SET_GIFT_PRICE
} from './constants';

export const addRecipient = recipient => ({
    type: ADD_RECIPIENT,
    recipient
});

export const removeRecipient = recipient => ({
  type: REMOVE_RECIPIENT,
  recipient
});

export const updateGift = (recipient, gift) => ({
  type: UPDATE_GIFT,
  recipient,
  gift
});

export const removeGift = recipient => ({
  type: REMOVE_GIFT,
  recipient
});

export const setGiftPrice = (recipient, price) => ({
  type: SET_GIFT_PRICE,
  recipient,
  price
});