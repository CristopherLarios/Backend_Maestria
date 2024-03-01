'use strict'

const express = require('express');
const router = express.Router();

const tesistasController = require('../Controllers/tesistaController');

router.get('/verTesistas', async (req, res) => {
  await tesistasController.mostrar(req, res);
});



module.exports = router;
