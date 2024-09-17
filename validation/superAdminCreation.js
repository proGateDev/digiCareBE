const Joi = require("joi");

const superAdminCreationValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
  
});

module.exports = superAdminCreationValidation;
  