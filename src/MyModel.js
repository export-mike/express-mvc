const fs = require('fs');
const uuid = require('uuid/v4');

const write = (fileName, data) => new Promise((resolve, reject) => {
	fs.writeFile(`./data/${fileName}.json`, JSON.stringify(data), 'utf-8', (err) => {
		if (err) return reject(err);
		resolve(Object.assign({}, data, {id: fileName}));
	})
});

class MyModel {
	static async create(data) {
		return await write(uuid(), data);
	}
};


module.exports = MyModel;
