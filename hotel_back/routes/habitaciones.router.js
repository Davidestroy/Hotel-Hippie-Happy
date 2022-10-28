
const express = require('express');
const router =express.Router();
const habitacionesController = require("../controllers/habitaciones.controller");

router.post("/",habitacionesController.create)
module.exports = router 