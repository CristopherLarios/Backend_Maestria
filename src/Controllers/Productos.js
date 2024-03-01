//cargamos el mongoose para gesitonar la bd
const { default: mongoose } = require('mongoose');
//Cargamos el modelo para mapearlo posteriormente
const Producto = require('../models/Productos');


// mostrar

module.exports.mostrar = async (req, res) => {

    try {
        const Productos = await Producto.find({});
        console.log(Productos);
        res.json(Productos);
        // res.render('Productos',{productos:productos});
    } catch (error) {
        console.error("error mostrando los prodcutos ", error)
        res.status(500).json({
            mesagge: 'Error mostrando los productos'
        });
    }
}
