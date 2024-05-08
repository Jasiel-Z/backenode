const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        tittle: 'Backend Node.js API',
        description: 'API creada en Node.js para la EE: Sistemas en Red'

    },
    host: 'localhost:3000'
};

//info del  archivo para documentación
const outputFile = './swagger-output.json';
const routes = ['./index.js'];

//generar la documentación
swaggerAutogen(outputFile, routes, doc);
