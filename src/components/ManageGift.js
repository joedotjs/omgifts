import React, {Component} from 'react';

class ManageGift extends Component {

  constructor() {
    super();
    this.state = {
      newGift: '',
      newGiftPrice: 0
    };
    this.setGift = this.setGift.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.submitGift = this.submitGift.bind(this);
    this.submitPrice = this.submitPrice.bind(this);
  }

  setGift(e) {
    this.setState({
      newGift: e.target.value
    });
  }

  setPrice(e) {
    this.setState({
      newGiftPrice: parseInt(e.target.value, 10)
    });
  }

  submitGift() {
    this.props.updateGift(this.props.entry.recipient, this.state.newGift);
  }

  submitPrice() {
    this.props.setGiftPrice(this.props.entry.recipient, this.state.newGiftPrice);
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.entry.gift}
          <button onClick={() => this.props.removeGift(this.props.entry.recipient)}>Remove Gift</button>
        </h3>
        <h4>{this.props.entry.price}</h4>
        <form onSubmit={this.submitGift}>
          <label>Enter new gift:</label>
          <input type="text" onChange={this.setGift} />
          <button>Submit new gift</button>
        </form>
        <form onSubmit={this.submitPrice}>
          <label>Enter new gift price:</label>
          <input type="text" onChange={this.setPrice} />
          <button>Submit new gift</button>
        </form>
      </div>
    );
  }
}

export default ManageGift;
