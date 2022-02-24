const setPersonal = (payload) => ({
  type: 'PERSONAL_ACTION', payload,
});

const setProfessional = (payload) => ({
  type: 'PROFESSIONAL_ACTION', payload,
});

module.exports = { setPersonal, setProfessional };
