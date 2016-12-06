import React, {Component} from 'react';

class AddNewRecipient extends Component {

  constructor() {
    super();
    this.state = {
      newRecipientName: ''
    };
    this.setName = this.setName.bind(this);
  }

  setName(e) {
    this.setState({
      newRecipientName: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={() => this.props.addNewRecipient(this.state.newRecipientName)}>
        <label>Add new recipient:</label>
        <input type="text" onChange={this.setName} />
      </form>
    );
  }
}

export default AddNewRecipient;
