const models = require('./models');

module.exports = (Controller, ModelName) => {
	return new Controller({ Model: models[ModelName] });
}
