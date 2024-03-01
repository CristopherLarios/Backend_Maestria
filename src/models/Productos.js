const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Productos = new Schema({
    Name: {type:String, unique:true, require},
    Stock: {type:Number,require},
    Costo: {type:Number,require}, 
    Imei: {type:Number,require}, 
    Marca: {type:Object,require}
});

module.exports = mongoose.model("Productos",Productos);

    