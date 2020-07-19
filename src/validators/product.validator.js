const Joi = require('@hapi/joi');

const schemas = {
  params: Joi.object({
    country_iso: Joi.string()
      .regex(/^[(PE),(PA)]{2,2}$/)
      .required(),
  })
};

module.exports = schemas;