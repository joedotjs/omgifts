import React, {Component} from 'react';

import ManageGift from './ManageGift';

class GiftEntry extends Component {

  constructor() {
    super();
    this.state = {
      gift: ''
    };
  }

  render() {
    return (
      <div className="gift">
          <h3>{this.props.entry.recipient}</h3>
          <ManageGift
            entry={this.props.entry}
            updateGift={this.props.updateGift}
            removeGift={this.props.removeGift}
            setGiftPrice={this.props.setGiftPrice}
          />
      </div>
    );
  }
}

export default GiftEntry;
