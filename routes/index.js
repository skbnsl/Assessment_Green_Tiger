const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getData', userController.getData);

router.post('/add', userController.add);

router.get('/getById/:id', userController.getById);

router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;