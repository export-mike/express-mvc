// @flow
const BaseController = require('./BaseController');
const Admin = require('./Admin');
const Joi = require('joi');
interface Controller {
	validation(): Object
}

class MyController extends BaseController implements Controller {
	validation() {
		return {
			post: {
				body: Joi.object().keys({
					name: Joi.string().required()
				})
			}
		};
	}
}

module.exports = Admin(MyController, 'MyModel');
