const initialState = [
  {recipient: 'Joe', gift: 'Drum sticks', price: 15},
  {recipient: 'Henry', gift: 'Bone', price: 20}
];
// [{recipient: String, gift: String, price: Number}]

import {
  ADD_RECIPIENT,
  REMOVE_RECIPIENT,
  UPDATE_GIFT,
  REMOVE_GIFT,
  SET_GIFT_PRICE
} from '../actions/constants';

export default function (state = initialState, action) {

  let newCollection, relevantEntry;

  switch (action.type) {

    case ADD_RECIPIENT:
      return [...state, { recipient: action.recipient }];

    case REMOVE_RECIPIENT:
      return [...state.filter(entry => entry.recipient !== action.recipient)];

    case UPDATE_GIFT:
      newCollection = [...state];
      relevantEntry = newCollection.find(entry => entry.recipient === action.recipient);
      relevantEntry.gift = action.gift;
      return newCollection;

    case REMOVE_GIFT:
      newCollection = [...state];
      relevantEntry = newCollection.find(entry => entry.recipient === action.recipient);
      delete relevantEntry.gift;
      return newCollection;

    case SET_GIFT_PRICE:
      newCollection = [...state];
      relevantEntry = newCollection.find(entry => entry.recipient === action.recipient);
      relevantEntry.price = action.price;
      return newCollection;

    default:
      return state;

  }

}