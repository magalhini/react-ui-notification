/* jshint esversion:6 */
import React from 'react';

require('./NotificationStyles.css');

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidUpdate(props) {
    if (!this.props.isActive) {
      requestAnimationFrame(() => this.refs.notification.classList.remove('is-active'));
    }
  }

  componentWillReceiveProps(props) {
    clearTimeout(this._dismissTimer);

    if (props.isActive) {
      this.refs.notification.classList.add('is-active');
    }

    if (this.props.autoDismiss && !this.props.isActive && props.isActive) {
      this._dismissTimer = setTimeout(this.onDismiss, props.dismissAfter);
    }
  }

  onDismiss(props) {
    this.props.onDismiss();
    clearTimeout(this._dismissTimer);
    this._dismissTimer = null;
  }

  componentWillUnmount() {
    clearTimeout(this._dismissTimer);
  }

  renderStyle(className) {
    switch (this.props.position) {
      case 'top':
        return `${className} is-at-top`;
      case 'bottom':
        return `${className} is-at-bottom`;
      case 'full':
        return `${className} ${className}--bar`;
      default:
        return className;
    }
  }

  render() {
    const {message, isActive, className} = this.props;
    const style = this.renderStyle(className);

    return (
      <div className={style} ref="notification"
        onClick={this.onDismiss}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

Notification.defaultProps = {
  dismissAfter: 2000,
  autoDismiss: true,
  className: 'c-notification'
};

export default Notification;
