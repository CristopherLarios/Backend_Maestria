const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const schema = mongoose.Schema;

const tesistaSchema = new schema({
    Primer_Nombre: { type: String, require: true },
    Segundo_Nombre: { type: String, require: false },
    Primer_Apellido: { type: String, require: true },
    Segundo_Apellido: { type: String, require: false },
    Numero_Carnet: { type: String, unique: true, require: true },
    Correo: { type: String, unique: true, require: true },
    Sexo: { type: String, require: true },
    Sede: { type: String, require: true },
    Programa: { type: String, require: true },
    Estado: { type: Boolean, require: true },
});

module.exports = mongoose.model("tesistas", tesistaSchema);