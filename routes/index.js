const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getData', userController.getData);

router.post('/add', userController.add);

router.get('/getById/:id', userController.getById);

router.put('/update/:id', userController.update);

module.exports = router;