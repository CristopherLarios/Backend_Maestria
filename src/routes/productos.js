'use strict'
const express = require('express');
const router= express.Router();

const Nproducto = require('../Controllers/Productos');


//Creamos la ruta de tipo get para el metodo de p`ruebas
router.get('/verproductos',async (req,res)=>{
    await Nproducto.mostrar(req,res);
});

module.exports = router;

