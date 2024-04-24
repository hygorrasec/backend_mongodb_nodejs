const router = require('express').Router();

const userController = require('../controllers/userController');

router.route('/users').post((req, res) => userController.createUser(req, res));
router.route('/users').get((req, res) => userController.getAllUsers(req, res));
router.route('/users/:id').get((req, res) => userController.getUser(req, res));
router.route('/users/:id').delete((req, res) => userController.delete(req, res));
router.route('/users/:id').put((req, res) => userController.update(req, res));

module.exports = router;