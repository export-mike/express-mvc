const Joi = require('joi');
const validate = (value = {}, schema = {}) => Joi.validate(value, schema);

const humanizeMessage = (details) =>
	details.reduce((acc, detail) => {
		if (!detail.message) return acc;
		if (acc.length) return `${acc}. ${detail.message}`;
		return `${detail.message}`
	}, '');

const getKeys = (details) => details.map(detail => detail.path);

module.exports = (schema) => (req, res, next) => {
	const bodyResult = validate(req.body, schema.body);
	if (bodyResult.error) {
		return res.status(400).json({
			statusCode: 400,
			error: 'Bad Request',
			message: humanizeMessage(bodyResult.error.details),
			validation: {
				source: 'body',
				keys: getKeys(bodyResult.error.details)
			}
		});
	}
	next();
};
