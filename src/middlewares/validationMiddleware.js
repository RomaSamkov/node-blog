const Joi = require('joi');

module.exports = {
  addPostValidation: (req, res, next) => {
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).required(),
      text: Joi.string().alphanum().min(10).max(400).required(),
    });

    const validateResult = schema.validate(req.body);
    if (validateResult.error) {
      return res.status(400).json({ status: validateResult.error.details });
    }
    next();
  },
  putPostValidation: (req, res, next) => {
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).required(),
      text: Joi.string().alphanum().min(10).max(400).required(),
    });

    const validateResult = schema.validate(req.body);
    if (validateResult.error) {
      return res.status(400).json({ status: validateResult.error.details });
    }
    next();
  },
};
