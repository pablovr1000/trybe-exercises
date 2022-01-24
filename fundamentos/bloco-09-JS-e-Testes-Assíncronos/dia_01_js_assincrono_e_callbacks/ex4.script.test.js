const uppercase = require('../dia_01_js_assincrono_e_callbacks/ex4');
console.log(uppercase)
it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});