import './App.css';
import React from 'react';
import Input from './Input';

class App extends React.Component {
  constructor() {
    super();
      this.state = { // construindo estado inicial
        email: '', // representa campo email
        password: '', 
      };
  }

  handleChange = ({ target: {value, name} }) => { // quando transforma a função em arrow function você não precisa do bind
    this.setState({ [name]: value }); // estou salvando o novo estado como o valor que tiver dentro de email
  }
  
  render() {
    const { password, email } = this.state;
    return (
      <section>
        <h2>Login</h2>
        <form>
          <Input
          name="email"
          value={ email }
          type="text"
          onInputChange={ this.handleChange }
          />
          <Input
          name="password"
          value={ password } 
          type="password"
          onInputChange={ this.handleChange }
          />
          <button type="submit">FAZER LOGIN</button>
        </form>
      </section>
    );
  }
}

export default App;
