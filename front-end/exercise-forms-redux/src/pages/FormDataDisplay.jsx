import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalReducer: {
      professional: {
        curriculo,
        cargo,
        descricao,
      },
    }, personalReducer: {
      personal: {
        nome,
        email,
        cpf,
        endereco,
        cidade,
        estado,
      },
    } } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  curriculo: PropTypes.string,
  cargo: PropTypes.string,
  descricao: PropTypes.string,
  nome: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.number,
  endereco: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(FormDataDisplay);
