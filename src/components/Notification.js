/* jshint esversion:6 */
import React from 'react';
import Styles from './Styles';

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

    getClassName(className) {
        switch (this.props.position) {
        case 'top':
            return `${className}--top`;
        case 'bottom':
            return `${className}--bottom`;
        case 'full':
            return `${className}--full`;
        default:
            return className;
        }
    }

    renderStyles(position, isActive) {
        if (position === 'bottom') {
            if (isActive) return Object.assign({}, Styles.base, Styles.baseAtBottomActive);
            else return Object.assign({}, Styles.base, Styles.baseBottomOffset);
        } else if (position === 'top') {
            if (isActive) return Object.assign({}, Styles.base, Styles.baseActive);
            else return Object.assign({}, Styles.base, Styles.baseTopOffset);
        } else if (position === 'full') {
            if (isActive) return Object.assign({}, Styles.fullWidth, Styles.fullWidthActive);
            else return Object.assign({}, Styles.fullWidth);
        } else {
            return Styles.base;
        }
    }

    render() {
        const { message, isActive, className, position } = this.props;
        let classes = null;
        let styles = this.renderStyles(position, isActive);

        if (className) {
            classes = this.getClassName(className);
        }

        return (
            <div className={classes} ref="notification"
                style={styles}
                onClick={this.onDismiss}>
                <span>{this.props.message}</span>
            </div>
        );
    }
}

Notification.defaultProps = {
    dismissAfter: 5000,
    position: 'top',
    autoDismiss: true,
};

export default Notification;
