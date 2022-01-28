import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li> // atributo key fala para o react quem será alterado
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((element) => Task(element)) }</ul>
    );
  }
}

export default App;

// Crie uma lista de tarefas simples que:
// Utilize a função Task dentro do componente App.
// Leia as tarefas de dentro de um Array.
// Use a função map para criar cada item da lista no HTML.
