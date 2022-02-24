const INITIAL_STATE = {
  personal: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PROFESSIONAL_ACTION':
    return {
      ...state,
      professional: action.payload,
    };
  default:
    return state;
  }
};

export default professionalReducer;
