// const { render } = ReactDOM
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 165,
      green: 57,
      blue: 230,
      alpha: 1 };

  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
      alpha: ReactDOM.findDOMNode(this.refs.alpha.refs.input).value });

  }
  render() {
    const bgc = this.state.alpha == 1 ?
    `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` :
    `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha})`;
    const body = document.body;
    let myStyle = {
      backgroundColor: bgc };

    body.style.backgroundColor = bgc;

    return /*#__PURE__*/(
      React.createElement("div", { className: "color-picker" }, /*#__PURE__*/
      React.createElement("div", { className: "color", style: myStyle }), /*#__PURE__*/
      React.createElement("div", { className: "result" }, bgc), /*#__PURE__*/
      React.createElement(Slider, { ref: "red", min: "0", max: "255", col: "red", val: this.state.red, update: () => this.update() }, this.state.red), /*#__PURE__*/
      React.createElement(Slider, { ref: "green", min: "0", max: "255", col: "green", val: this.state.green, update: () => this.update() }, this.state.green), /*#__PURE__*/
      React.createElement(Slider, { ref: "blue", min: "0", max: "255", col: "blue", val: this.state.blue, update: () => this.update() }, this.state.blue), /*#__PURE__*/
      React.createElement(Slider, { ref: "alpha", min: "0", max: "1", col: "alpha", step: "0.01", val: this.state.alpha, update: () => this.update() }, this.state.alpha)));


  }}


class Slider extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", { ref: "input",
        value: this.props.val,
        type: "range",
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        onChange: this.props.update }), /*#__PURE__*/

      React.createElement("div", null, this.props.col, ": ", this.props.children)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(ColorPicker, null), document.getElementById('app'));