const express = require('express');
const bodyParser = require('body-parser');
const MyController = require('./MyController');

const app = express();
app.use(bodyParser.json());

app.post('/', MyController.create);
app.get('/', MyController.get);

app.listen(3000, err => {
	console.log('server started');
});