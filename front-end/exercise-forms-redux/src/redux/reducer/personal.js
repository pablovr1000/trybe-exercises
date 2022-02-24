const INITIAL_STATE = {
  personal: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PERSONAL_ACTION':
    return {
      ...state,
      personal: action.payload,
    };
  default:
    return state;
  }
};

export default myReducer;
