const models = require('./models');
const BaseController = require('./BaseController');

interface AdminController {
	validation(): Object
}

module.exports = (Controller, ModelName) => {
	if (Controller.validation) {
		class GeneratedController extends BaseController implements AdminController {
			validation() {
				return Controller.validation
			}
		}

		return new GeneratedController({ Model: models[ModelName]});
	}

	return new Controller({ Model: models[ModelName] });
}
