const BaseController = require('./BaseController');
const Admin = require('./Admin');


class MyController extends BaseController {
	validate() {
		return {};
	}
}

module.exports = Admin(MyController, 'MyModel');