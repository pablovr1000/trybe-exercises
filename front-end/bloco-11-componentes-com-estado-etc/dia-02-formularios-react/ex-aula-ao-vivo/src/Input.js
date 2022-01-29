import React from "react";

class Input extends React.Component {
  render() {
    const { value, onInputChange, name, type } = this.props;
    return (
      <input
        type={ type }
        name ={ name }
        value={ value }
        onChange={ onInputChange } // criei uma props que recebe o valor onInputChange
      /> // quando ocorrer alguma mudança no input ele vai chamar a função onInputChange
    )
  }
}

export default Input;