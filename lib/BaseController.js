var _class, _temp, _initialiseProps;

module.exports = (_temp = _class = class BaseController {

	constructor({ Model }) {
		_initialiseProps.call(this);

		this.Model = Model;
	}

}, _initialiseProps = function () {
	this.create = async (req, res, next) => {
		try {
			const newModel = await this.Model.create(req.body);
			res.send(newModel);
		} catch (e) {
			next(e);
		}
	};

	this.get = async (req, res, next) => {
		try {
			res.send('hi');
		} catch (e) {
			next(e);
		}
	};
}, _temp);