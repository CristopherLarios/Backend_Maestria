
// cargamos mongoose para gestionar nuestra BD
const { default: mongoose } = require('mongoose');
// Cargamos el modelo para usarlo posteriormente
const tesistas = require('../models/tesistas');

//mostrar

module.exports.mostrar = async (req, res) => {
    try {
        const Tesistas = await tesistas.find({});
        // console.log(Tesistas);
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

        console.log(req.body)

        let sedeNombre;
        let programa;
        switch (req.body.Sede) {
            case '1':
                sedeNombre = 'CENTRAL';
                break;
            case '2':
                sedeNombre = 'JUIGALPA';
                break;
            case '3':
                sedeNombre = 'ESTELI';
                break;
            default:
                sedeNombre = 'Sede Desconocida';
                break;
        }
        switch (req.body.Programa) {
            case '1':
                programa = 'Ing.Sistemas';
                break;
            case '2':
                programa = 'Ing.Computacion';
                break;
            case '3':
                programa = 'Ing.Electronica';
                break;
            case '4':
                programa = 'Ing.Telecomunicaciones';
                break;
            default:
                programa = 'Programa Desconocida';
                break;
        }

        // Crear nuevo Tesista
        const Tesistas = new tesistas({
            Primer_Nombre: req.body.Primer_Nombre,
            Segundo_Nombre: req.body.Segundo_Nombre,
            Primer_Apellido: req.body.Primer_Apellido,
            Segundo_Apellido: req.body.Segundo_Apellido,
            Numero_Carnet: req.body.Numero_Carnet,
            Correo: req.body.Correo + '@DACTIC.uni.edu.ni',
            Sexo: req.body.Sexo,
            Sede: sedeNombre,
            Programa: programa,
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

module.exports.borrar = async (req, res) => {
    const id = req.params.id;
    try {
        console.log(req.params)
        const Tesista = await tesistas.findByIdAndDelete(id);
        if (!Tesista) {
            return res.status(404).json({ message: 'Tesista no encontrado' });
        }
        res.redirect('/verTesistas');
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error al eliminar el Tesista' });
    }
};

module.exports.editar = async (req, res) => {



    console.log("req", req.body)

    let sedeNombre;
    let programa;
    switch (req.body.Sede_editar) {
        case '1':
            sedeNombre = 'CENTRAL';
            break;
        case '2':
            sedeNombre = 'JUIGALPA';
            break;
        case '3':
            sedeNombre = 'ESTELI';
            break;
        default:
            sedeNombre = 'Sede Desconocida';
            break;
    }
    switch (req.body.Programa_editar) {
        case '1':
            programa = 'Ing.Sistemas';
            break;
        case '2':
            programa = 'Ing.Computacion';
            break;
        case '3':
            programa = 'Ing.Electronica';
            break;
        case '4':
            programa = 'Ing.Telecomunicaciones';
            break;
        default:
            programa = 'Programa Desconocida';
            break;
    }


    let Primer_Nombre = req.body.Primer_Nombre_editar;
    let Segundo_Nombre = req.body.Segundo_Nombre_editar;
    let Primer_Apellido = req.body.Primer_Apellido_editar;
    let Segundo_Apellido = req.body.Segundo_Apellido_editar;
    let Numero_Carnet = req.body.Numero_Carnet_editar;
    let Correo = req.body.Correo_editar + '@DACTIC.uni.edu.ni';
    let Sexo = req.body.Sexo_editar;
    let Sede = sedeNombre;
    let Programa = programa;
    let Estado = true;


    try {
        const Tesista = await tesistas.findByIdAndUpdate(req.body.id_editar, { Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Primer_Apellido, Numero_Carnet, Correo, Sexo, Sede, Programa, Estado });

        if (!Tesista) {
            return res.status(404).json({ message: "Tesista no actualizado" });
        }
        res.redirect('/verTesistas');
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error al eliminar el Tesista' });
    }
};
