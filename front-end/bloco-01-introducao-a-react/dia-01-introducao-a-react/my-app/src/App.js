import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li> // criando uma li. O key fala para o React quais elementos sofrerão alterações
  );
}

const tasks = ['ler', 'estudar', 'dormir', 'caminhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((element) => element) }</ul>
    );
  }
}

export default App;

// Crie uma lista de tarefas simples que:
// Utilize a função Task dentro do componente App.
// Leia as tarefas de dentro de um Array.
// Use a função map para criar cada item da lista no HTML.


