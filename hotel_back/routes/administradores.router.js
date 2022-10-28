const express = require('express');
const router =express.Router();
const administradoresController = require("../controllers/administradores.controller");

router.post("/",administradoresController.create)
module.exports = router  