const fixture = require('./fixture/fixture.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(fixture);
};
