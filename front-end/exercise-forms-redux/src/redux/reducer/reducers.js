const INITIAL_STATE = {
  nome: '',
/*   email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '', */
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PERSONAL_ACTION':
    return {
      nome: action.payload.nome,
    };
  default:
    return state;
  }
};

export default myReducer;
