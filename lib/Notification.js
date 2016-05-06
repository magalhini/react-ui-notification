'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint esversion:6 */


var Notification = function (_React$Component) {
    _inherits(Notification, _React$Component);

    function Notification(props) {
        _classCallCheck(this, Notification);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this, props));

        _this.onDismiss = _this.onDismiss.bind(_this);
        return _this;
    }

    _createClass(Notification, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(props) {
            var _this2 = this;

            if (!this.props.isActive) {
                requestAnimationFrame(function () {
                    return _this2.refs.notification.classList.remove('is-active');
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            clearTimeout(this._dismissTimer);

            if (props.isActive) {
                this.refs.notification.classList.add('is-active');
            }

            if (this.props.autoDismiss && !this.props.isActive && props.isActive) {
                this._dismissTimer = setTimeout(this.onDismiss, props.dismissAfter);
            }
        }
    }, {
        key: 'onDismiss',
        value: function onDismiss(props) {
            this.props.onDismiss();
            clearTimeout(this._dismissTimer);
            this._dismissTimer = null;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this._dismissTimer);
        }
    }, {
        key: 'getClassName',
        value: function getClassName(className) {
            switch (this.props.position) {
                case 'top':
                    return className + '--top';
                case 'bottom':
                    return className + '--bottom';
                case 'full':
                    return className + '--full';
                default:
                    return className;
            }
        }
    }, {
        key: 'renderStyles',
        value: function renderStyles(position, isActive) {
            var styling = this.props.styles ? this.props.styles : _Styles2.default;

            if (position === 'bottom') {
                if (isActive) return Object.assign({}, styling.base, styling.baseAtBottomActive);else return Object.assign({}, styling.base, styling.baseBottomOffset);
            } else if (position === 'top') {
                if (isActive) return Object.assign({}, styling.base, styling.baseActive);else return Object.assign({}, styling.base, styling.baseTopOffset);
            } else if (position === 'full') {
                if (isActive) return Object.assign({}, styling.fullWidth, styling.fullWidthActive);else return Object.assign({}, styling.fullWidth);
            } else {
                return _Styles2.default.base;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var message = _props.message;
            var isActive = _props.isActive;
            var className = _props.className;
            var position = _props.position;

            var classes = null;
            var styles = this.renderStyles(position, isActive);

            if (className) {
                classes = this.getClassName(className);
            }

            return _react2.default.createElement(
                'div',
                { className: classes, ref: 'notification',
                    style: styles,
                    onClick: this.onDismiss },
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.message
                )
            );
        }
    }]);

    return Notification;
}(_react2.default.Component);

Notification.defaultProps = {
    dismissAfter: 5000,
    position: 'top',
    autoDismiss: true
};

exports.default = Notification;