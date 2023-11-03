const UserController = require('./controllers/UserController');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController');
const MotorcycleController = require('./controllers/MotorcycleController'); //MotorcycleController

module.exports = (app) => {
    /* RESTful API for users and motorcycles management */
    // get all user
    app.get('/users', isAuthenController, UserController.index);

    // create user
    app.post('/user', UserController.create);

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put);

    // delete user
    app.delete('/user/:userId', UserController.remove);

    // get user by id
    app.get('/user/:userId', UserController.show);

    // get all motorcycles 
    app.get('/motorcycles', MotorcycleController.index);

    // create motorcycle 
    app.post('/motorcycle', MotorcycleController.create);

    // edit motorcycle 
    app.put('/motorcycle/:motorcycleId', MotorcycleController.put);

    // delete motorcycle 
    app.delete('/motorcycle/:motorcycleId', MotorcycleController.remove);

    // get motorcycle by id 
    app.get('/motorcycle/:motorcycleId', MotorcycleController.show);

    app.post('/login', UserAuthenController.login);
}
