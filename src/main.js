/* jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './components/Notification';

require('./styles.css');

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
    console.log('hide 1')
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

        <button onClick={this.showAlert1.bind(this)}>Trigger 1</button>
        <button onClick={this.showAlert2.bind(this)}>Trigger 2</button>
        <button onClick={this.showAlert3.bind(this)}>Trigger 3</button>

        <Notification
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
