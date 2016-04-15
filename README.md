# React UI Notification
A simple component for flexible UI notifications using React.

See `src/main.js` for a sample usage of the Component.

Example:

```
<Notification
  onDismiss={this.hideAlert}
  isActive={this.state.isAlertActive}
  position="top"
  message="Hello there, old chap!">
</Notification>
```

### Options

```
position: top      # Toast, at the top
position: bottom   # Toast, at the bottom
position: full     # Full width bar
autoDismiss: Bool  # Auto-dismiss notification
dismissAfter: Number # Time to auto-dismiss (in ms)
```

### Styling

Some styling is provided out-of-the-box, namely a CSS being required using `ES2015` imports into the component itself. You can either modify this style (which follows the `BEM` convention) or wait until I develop more styles and have the option to include them inline... :)

### Todo

- [ ] Add the possibility to have a title
- [ ] More (better) styling by default
- [ ] Pause dismiss on hover
- [ ] Inline styles
