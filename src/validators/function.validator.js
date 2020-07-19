const httpStatusCodes = require('http-status-codes');
const responseResult = require('../utils/response.util');

const validator = (schemas) => {
  return (req, res, next) => {
    const arr = ['body', 'params', 'query', 'headers'];

    let valid = true;

    arr.forEach((it) => {
      if (schemas[it]) {
        const validatorReturned = schemas[it].validate(req[it]);

        if (validatorReturned.error) {
          valid = false;
          responseResult.error(
            res,
            httpStatusCodes.LENGTH_REQUIRED,
            'Invalid data',
            validatorReturned.error
          );
        }
      }
    });

    if (valid) {
      next();
    }
  };
};

module.exports = validator;
