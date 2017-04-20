const express = require('express');
const bodyParser = require('body-parser');
const MyController = require('./MyController');
const validator = require('./validator');

const app = express();
app.use(bodyParser.json());

app.post('/', validator(MyController.validation().post),  MyController.post);
app.get('/', MyController.get);

app.listen(3000, (err) => {
	console.log('server started');
})
