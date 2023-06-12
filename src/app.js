import express from 'express';
import Defensas_reinosController from './controllers/Defensas_reinosController.js';
import DefensasController from './controllers/DefensasController.js';
import DiplomaciasController from './controllers/DiplomaciasController.js';
import KartsController from './controllers/KartsController.js';
import Personaje_habita_reinoController from './controllers/Personaje_habita_reinoController.js';
import Personaje_tiene_trabajoController from './controllers/Personaje_tiene_trabajoController.js';
import PersonajesController from './controllers/PersonajesController.js';
import ReinosController from './controllers/ReinosController.js';
import TrabajosController from './controllers/TrabajosController.js';
import morgan from 'morgan';

const ENV = process.env;
const app = express();
//const express = require('express');
//const router = express.Router();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpointsDefensas_reinos
app.get('/Defensas_reinos', Defensas_reinosController.getDefensas_reinos);
app.get('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.getDefensas_reinosById);
app.post('/Defensas_reinos', Defensas_reinosController.createDefensas_reinos);
app.put('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.updateDefensas_reinos);
app.delete('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.deleteDefensas_reinos);

//endpointsDefensas
app.get('/Defensas', DefensasController.getDefensas);
app.get('/Defensas/:id', DefensasController.getDefensasById);
app.post('/Defensas', DefensasController.createDefensas);
app.put('/Defensas/:id', DefensasController.updateDefensas);
app.delete('/Defensas', DefensasController.deleteDefensas);

//endpointsDiplomacias
app.get('/Diplomacias', DiplomaciasController.getDiplomacias);
app.get('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.getDiplomaciasById);
app.post('/Diplomacias', DiplomaciasController.createDiplomacias);
app.put('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.updateDiplomacias);
app.delete('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.deleteDiplomacias);

//endpointsKarts
app.get('/Karts', KartsController.getKarts);
app.get('/Karts/:id', KartsController.getKartsById);
app.post('/Karts', KartsController.createKarts);
app.put('/Karts/:id', KartsController.updateKarts);
app.delete('/Karts/:id', KartsController.deleteKarts);

//endopintsPersonaje_habita_reino
app.get('/Personaje_habita_reino', Personaje_habita_reinoController.getPersonaje_habita_reino);
app.get('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.getPersonaje_habita_reinoById);
app.post('/Personaje_habita_reino', Personaje_habita_reinoController.createPersonaje_Habita_Reino);
app.put('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.updatePersonaje_habita_reino);
app.delete('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.deletePersonaje_habita_reino);

//endpointsPersonaje_tiene_trabajo
app.get('/Personaje_tiene_trabajo', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajo);
app.get('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajoById);
app.post('/Personaje_tiene_trabajo', Personaje_tiene_trabajoController.createPersonaje_tiene_trabajo);
app.put('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.updatePersonaje_tiene_trabajo);
app.delete('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.deletePersonaje_tiene_trabajo);

//endpointsPersonajes
app.get('/Personajes', PersonajesController.getPersonajes);
app.get('/Personajes/:id', PersonajesController.getPersonajesById);
app.post('/Personajes', PersonajesController.createPersonajes);
app.put('/Personajes/:id', PersonajesController.updatePersonajes);
app.delete('/Personajes/:id', PersonajesController.deletePersonajes);

//endpointsReinos
app.get('/Reinos', ReinosController.getReinos);
app.get('/Reinos/:id', ReinosController.getReinosById);
app.post('/Reinos', ReinosController.createReinos);
app.put('/Reinos/:id', ReinosController.updateReinos);
app.delete('/Reinos/:id', ReinosController.deleteReinos);

//endpointsTrabajos
app.get('/Trabajos', TrabajosController.getTrabajos);
app.get('/Trabajos/:id', TrabajosController.getTrabajosById);
app.post('/Trabajos', TrabajosController.createTrabajos);
app.put('/Trabajos/:id', TrabajosController.updateTrabajos);
app.delete('/Trabajos/:id', TrabajosController.deleteTrabajos);



// fofos
//module.exports = router;

//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})