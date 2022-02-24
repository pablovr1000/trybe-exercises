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

const personalReducer = (state = INITIAL_STATE, action) => {
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

export default personalReducer;
