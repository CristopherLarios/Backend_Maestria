
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