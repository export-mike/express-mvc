// @flow
const Admin = require('./Admin');
const Joi = require('joi');

module.exports = Admin({
	validation: {
		post: {
			body: Joi.object().keys({
				name: Joi.string().required()
			})
		}
	}
}, 'MyModel');
