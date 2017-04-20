'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({ port: 4000, host: 'localhost' });
server.route(
	{
		path: '/',
		method: 'POST',
		handler: (request, reply) => {
			reply({ done: true })
		},
		config: {
			validate: {
				payload: {
					name: Joi.string().required()
				}
			}
		}
	}
)
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
