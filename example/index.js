/* jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../src/components/Notification';
import Styles from './ExampleStyling';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notifications: {
        showAlert1: false,
        showAlert2: false,
        showAlert3: false
      }
    };
  }

  showAlert1() {
    this.setState({
      notifications: { showAlert1: true }
    });
  }

  hideAlert1() {
    this.setState({
      notifications: {showAlert1: false}
    });
  }

  showAlert2() {
    this.setState({
      notifications: { showAlert2: true }
    });
  }

  showAlert3() {
    this.setState({
      notifications: { showAlert3: true }
    });
  }


  hideAlert2() {
    this.setState({
      notifications: { showAlert2: false }
    });
  }

  hideAlert3() {
    this.setState({
      notifications: { showAlert3: false }
    });
  }

  render() {
    let shouldAlert1 = this.state.notifications.showAlert1;
    let shouldAlert2 = this.state.notifications.showAlert2;
    let shouldAlert3 = this.state.notifications.showAlert3;

    return (
      <div>
          <h2>React UI Notifications</h2>
          <hr/>
          <div className="button-sample">
              <button onClick={this.showAlert1.bind(this)}>Bottom left</button>
              <span>(needs click to dismiss)</span>
          </div>
          <div className="button-sample">
              <button onClick={this.showAlert2.bind(this)}>Top left</button>
              <span>(self dismissing)</span>
          </div>
          <div className="button-sample">
              <button onClick={this.showAlert3.bind(this)}>Full width</button>
              <span>(self dismissing)</span>
          </div>

        <Notification
            styles={Styles}
          onDismiss={this.hideAlert1.bind(this)}
          isActive={shouldAlert1}
          position="bottom"
          autoDismiss={false}
          message="Hello first">
        </Notification>

        <Notification
          onDismiss={this.hideAlert2.bind(this)}
          isActive={shouldAlert2}
          position="top"
          message="Hello second">
        </Notification>


        <Notification
          onDismiss={this.hideAlert3.bind(this)}
          isActive={shouldAlert3}
          position="full"
          message="Hello third">
        </Notification>
      </div>);
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
