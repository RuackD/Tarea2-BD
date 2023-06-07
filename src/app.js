import express from 'express';
import morgan from 'morgan';
import Defensas_reinosController from './controllers/Defensas_reinosController.js';
import DefensasController from './controllers/DefensasController.js';
import DiplomaciasController from './controllers/DiplomaciasController.js';
import KartsController from './controllers/KartsController.js';
import Personaje_habita_reinoController from './controllers/Personaje_habita_reinoController.js';
import Personaje_tiene_trabajoController from './controllers/Personaje_tiene_trabajoController.js';
import PersonajesController from './controllers/PersonajesController.js';
import ReinosController from './controllers/ReinosController.js';
import TrabajosController from './controllers/TrabajosController.js';
const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
router.get('/users', UsersController.getUsers);
router.post('/users', UsersController.createUser);
router.put('/users/:id', UsersController.updateUser);
router.delete('/users/:id', UsersController.deleteUser);

//endpointsDefensas_reinos
router.get('/Defensas_reinos', Defensas_reinosController.getDefensas_reinos);
router.get('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.getDefensas_reinosById);
router.post('/Defensas_reinos', Defensas_reinosController.createDefensas_reinos);
router.put('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.updateDefensas_reinos);
router.delete('/Defensas_reinos/:id_reinos/:id_defensas', Defensas_reinosController.deleteDefensas_reinos);

//endpointsDefensas
router.get('/Defensas', DefensasController.get);
router.get('/Defensas/:id', DefensasController.getDefensasById);
router.post('/Defensas', DefensasController.createDefensas);
router.put('/Defensas/:id', DefensasController.updateDefensas);
router.delete('/Defensas', DefensasController.deleteDefensas);

//endpointsDiplomacias
router.get('/Diplomacias', DiplomaciasController.getDiplomacias);
router.get('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.getDiplomaciasById);
router.post('/Diplomacias', DiplomaciasController.createDiplomacias);
router.put('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.updateDiplomacias);
router.delete('/Diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.deleteDiplomacias);

//endpointsKarts
router.get('/Karts', KartsController.getKarts);
router.get('/Karts/:id', KartsController.getKartsById);
router.post('/Karts', KartsController.createKarts);
router.put('/Karts/:id', KartsController.updateKarts);
router.delete('/Karts/:id', KartsController.deleteKarts);

//endopintsPersonaje_habita_reino
router.get('/Personaje_habita_reino', Personaje_habita_reinoController.getPersonaje_habita_reino);
router.get('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.getPersonaje_habita_reinoById);
router.post('/Personaje_habita_reino', Personaje_habita_reinoController.createPersonaje_Habita_Reino);
router.put('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.updatePersonaje_habita_reino);
router.delete('/Personaje_habita_reino/:id_personaje/:id_reino', Personaje_habita_reinoController.deletePersonaje_habita_reino);

//endpointsPersonaje_tiene_trabajo
router.get('/Personaje_tiene_trabajo', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajo);
router.get('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajoById);
router.post('/Personaje_tiene_trabajo', Personaje_tiene_trabajoController.createPersonaje_tiene_trabajo);
router.put('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.updatePersonaje_tiene_trabajo);
router.delete('/Personaje_tiene_trabajo/:id_personaje/:id_trabajo', Personaje_tiene_trabajoController.deletePersonaje_tiene_trabajo);

//endpointsPersonajes
router.get('/Personajes', PersonajesController.getPersonajes);
router.get('/Personajes/:id', PersonajesController.getPersonajesById);
router.post('/Personajes', PersonajesController.createPersonajes);
router.put('/Personajes/:id', PersonajesController.updatePersonajes);
router.delete('/Personajes/:id', PersonajesController.deletePersonajes);

//endpointsReinos
router.get('/Reinos', ReinosController.getReinos);
router.get('/Reinos/:id', ReinosController.getReinosById);
router.post('/Reinos', ReinosController.createReinos);
router.put('/Reinos/:id', ReinosController.updateReinos);
router.delete('/Reinos/:id', ReinosController.deleteReinos);

//endpointsTrabajos
router.get('/Trabajos', TrabajosController.getTrabajos);
router.get('/Trabajos/:id', TrabajosController.getTrabajosById);
router.post('/Trabajos', TrabajosController.createTrabajos);
router.put('/Trabajos/:id', TrabajosController.updateTrabajos);
router.delete('/Trabajos/:id', TrabajosController.deleteTrabajos);


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
    console.log(`Server running on port ${3000}`);
})