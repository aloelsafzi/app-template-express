const express = require('express');
const router = express.Router();
const { dashboardController } = require('../controllers')

/* GET home page. */
router.get('/', dashboardController.renderViewDashboard);

module.exports = router;
