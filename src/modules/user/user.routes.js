const path = require('path');
const controller = require('./user.controller');

const validate = require(path.join(process.cwd(), 'src/modules/core/middleware/validator.middleware'));
const registerSchema = require('./user.schema');

module.exports = app => {
  app.post('/api/users/signup', validate(registerSchema), controller.signup);
  app.post('/api/users/login', controller.login);
};
