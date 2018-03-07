// Initializes the `fixture` service on path `/fixture`
const createService = require('feathers-mongoose');
const createModel = require('../../models/fixture.model');
const hooks = require('./fixture.hooks');
const filters = require('./fixture.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'fixture',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fixture', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fixture');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
