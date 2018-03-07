const assert = require('assert');
const app = require('../../src/app');

describe('\'fixture\' service', () => {
  it('registered the service', () => {
    const service = app.service('fixture');

    assert.ok(service, 'Registered the service');
  });
});
