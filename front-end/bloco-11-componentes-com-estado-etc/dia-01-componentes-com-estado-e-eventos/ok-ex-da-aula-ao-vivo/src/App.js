import React from "react";
import "./App.css";
import colors from './colorsData';
import copo from './copo.png'

// 1. Listar as cores
// 2. Aparecer o quadrado com a cor
// 3. Fazer input
// 4. Armazenar as informações do Input
// 5. Atualizar essas informações
// 6. Filtrar as cores
// 7. Adicionar copo e mudar de cor


class App extends React.Component { // cada vez que ele carregar o state ele vai renderizar todo esse código

  constructor() {
    super(); // chama o componente pai e vai dar acesso ao this.state. É uma palavra do JavaScript
    this.state = {
      typedText: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      typedText: e.target.value,
    });
  }

  firstColorHex() {
    if (this.state.typedText === "") {
      return "#303030";
    }
    const firstColor = colors.find((color) =>
      color.name.includes(this.state.typedText)
    );
    if (!firstColor) {
      return "#303030";
    }
    return firstColor.hex;
  }


  render() {
    return (
      <div>
        <h1>Que suco foi esse?</h1>
        <input value={ this.state.typedText } type="text" onChange={ this.handleChange }></input> { /* precisamos configurar o estado inicial do input */ }
        <hr />

        <img
          src={ copo }
          alt='Imagem do Copo'
          width='200'
          style={{ backgroundColor: this.firstColorHex() }}
        />
        
        <ul>
          { colors
            .filter((color) => color.name.includes(this.state.typedText))
            .map((element) => {
            return (
              <li key={ element.hex }>
                <div
                  style={{
                    backgroundColor: element.hex
                  }}
                  className="color-display"
                ></div>
              { element.name }
            </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default App;

// Ao colocar style no React a gente não usa aspas, isso é para HTML
// O react vai quere que a gente passe um objeto
// Não tem como passar objeto via HTML, então temos que usar via JavaScript
// E para usarmos JavaScript temos que usar as chaves {}
// Depois para passarmos um objeto usamos outra chaves dentro dessa chave. Assim -> {{}}

// -------------------

// Uma div por padrão é display block, isso significa que ela vai pegar toda largua da onde ela está
// Para ajustar o problema da div não estar alinhada com os elementos você tem que usar o display inline-block.

// -------------
// Toda vez que eu digitar no input eu quero que o input mude o estado inicial.

// --------------
// Na linha 41 estou perguntando "o meu array de cores tem alguma cor com a letra que está no input?
// Se sim, ele vai retornar o array de objeto que contenha aquela cor e depois, através do map,
// vai me retornar somente a cor que restou (que é o que tá escrito dentro do input (salvo no estado))

// na linha 37 ele verifica se o array com com os nomes da cores inclui o que está no input
// se ele tiver ele vai retornar o primeiro elemento que ele contrar, que seria a cor para o backgroundColor