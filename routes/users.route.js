var express = require('express');
var router = express.Router();
const { userController } = require('../controllers')

// const maxSizeUpload = Number(process.env.MAX_SIZE_UPLOAD) * 1000 * 1000; // default 5 mb


/* GET users listing. */
router.get('/', userController.viewUser);
router.post('/create', userController.createUser);

module.exports = router;
