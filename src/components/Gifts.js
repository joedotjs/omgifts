import React from 'react';

import GiftEntry from './GiftEntry';

const createGiftEntry = (gift, i, props) => {
    return (
      <GiftEntry
        entry={gift}
        key={i}
        removeGift={props.removeGift}
        updateGift={props.updateGift}
        setGiftPrice={props.setGiftPrice}
      />
    );
};

const Gifts = (props) => {
  return (
    <section id="gifts-section">
      {props.gifts.map((gift, i) => createGiftEntry(gift, i, props))}
    </section>
  );
};

export default Gifts;
