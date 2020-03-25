const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/*routes.get('/users', (request, response) => {
    const queryParams = request.query;
    const routeParams = request.params;
    const requestBody = request.body;

    console.log(queryParams);

    console.log(routeParams);

    console.log(requestBody);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Joao Neves'
    });
});*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
module.exports = routes;