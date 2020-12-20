'use strict';

const hapi = require('hapi');


const init = async () => {
	
    const server = hapi.server({    
        port: 8080,    
        host: 'localhost'
    });
	
	const db = require('./database').db;
	const routes = require('./routes');

	server.route(routes);

	server.route({
		method: 'GET',
		path: '/api',
		handler: (request, h) => {
            if(db.readyState == 1){
                return {'name':'Connected!'};
            }else if(db.readyState == 2){
                return 'Connecting!';
            }else if(db.readyState == 0){
                return 'Disconnected!';
            }
            return 'Error!';
        }
	});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();