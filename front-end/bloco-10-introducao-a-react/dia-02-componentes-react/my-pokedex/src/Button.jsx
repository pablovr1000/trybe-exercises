import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super()
    this.state = {
      addPok: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
   pokemons.map((element) => (
      <Pokemon
        key={ element.name }
        name={ element.name }
        type={ element.type }
        averageWeight={ element.averageWeight }
        image={ element.image }
      />
   ))
  }

  render() {
    return (
      <button onClick={}>Adicionar pokemon</button>
    );
  }
}

export default Button; 