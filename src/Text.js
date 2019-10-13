import React from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
          <input type="text" value={this.props.currentValue} onChange={this.props.handleChange} />
    );
  }
}

export default TextBox
