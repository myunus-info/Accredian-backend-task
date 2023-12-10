const { string, object, ref } = require('yup');

const isUsernameValid = username => {
  return /^[a-z0-9_]+$/.test(username);
};

const isEmailValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const registerSchema = object().shape({
  username: string()
    .max(100, 'This field must be at most 100 characters long')
    .required('This field must not be empty')
    .test('No special character, space or uppercase in username', username => isUsernameValid(username)),
  email: string()
    .max(100, 'This field must be at most 100 characters long')
    .required('This field must not be empty')
    .test('Invalid email address', email => isEmailValid(email)),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'This field must be at most 50 characters long')
    .required('Password must not be empty'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('This field must not be empty'),
});

const loginSchema = object().shape({
  username: string()
    .max(100, 'This field must be at most 100 characters long')
    .test('No special character, space or uppercase in username', username => isUsernameValid(username)),
  email: string()
    .max(100, 'This field must be at most 100 characters long')
    .test('Invalid email address', email => isEmailValid(email)),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'This field must be at most 50 characters long')
    .required('Password must not be empty'),
});

module.exports = {
  registerSchema,
  loginSchema,
};
