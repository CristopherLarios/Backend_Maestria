
// cargamos mongoose para gestionar nuestra BD
const { default: mongoose } = require('mongoose');
// Cargamos el modelo para usarlo posteriormente
const tesistas = require('../models/tesistas');

//mostrar

module.exports.mostrar = async (req, res) => {
    try {
        const Tesistas = await tesistas.find({});
        console.log(Tesistas);
        // res.json(Tesistas);
        res.render('tesistas', { Tesistas: Tesistas });
    } catch (error) {
        console.error('Error mostrando los Tesistas:', error);
        res.status(500).json({
            message: 'Error mostrando los Tesistas'
        });
    }
};

const { validationResult } = require('express-validator');

module.exports.crear = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Crear nuevo Tesista
        const Tesistas = new tesistas({
            Primer_Nombre: req.body.Primer_Nombre,
            Segundo_Nombre: req.body.Segundo_Nombre,
            Primer_Apellido: req.body.Primer_Apellido,
            Segundo_Apellido: req.body.Segundo_Apellido,
            Numero_Carnet: req.body.Numero_Carnet,
            Correo: req.body.Correo,
            Sexo: req.body.Sexo,
            Sede: req.body.Sede,
            Programa: req.body.Programa,
            Estado: true
        });

        // Guardar 
        await Tesistas.save();

        // Redirigir al usuario a la página de productos
        res.redirect('/verTesistas');
    } catch (error) {
        // Manejar errores
        console.error(error.message);
        return res.status(500).json({
            message: 'Error al registrar el producto'
        });
    }
};