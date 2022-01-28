import './App.css';
import React from 'react';

class App extends React.Component() {
  constructor() {
    super();

    this.teste = this.teste.bind(this);

    this.state = {
      name: '',
      text: '',
      seleciona: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
        <form>
          <select>
            <option>um</option>
            <option>dois</option>
            <option>três</option>
          </select>
          <label>
            Insira o seu nome:
            <input name="xablau" />
          </label>
          <label>
            Insira um texto:
            <textarea name="xablau" value={ this.state.name } onChange={ this.handleChange }/>
          </label>
        </form>
      </>
    );
  }
}

export default App;
