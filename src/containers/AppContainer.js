import React, {Component} from 'react';
import {Link} from 'react-router';

class AppContainer extends Component {
  render() {
    return (
      <main id="omgifts">
        <h1>OMGifts!</h1>
        <nav>
          <div>
            <Link to="/budget">Manage Budget</Link>
          </div>
          <div>
            <Link to="/recipients">Manage Recipients</Link>
          </div>
          <div>
            <Link to="/gifts">Manage Gifts</Link>
          </div>
        </nav>
        {this.props.children && React.cloneElement(this.props.children)}
      </main>
    );
  }
}

export default AppContainer;
