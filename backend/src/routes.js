const express = require('express');
const OngController = require('./controllers/OngController');
const Incidentontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', Incidentontroller.index);
routes.post('/incidents', Incidentontroller.create);
routes.delete('/incidents/:id',Incidentontroller.delete);

module.exports = routes;
