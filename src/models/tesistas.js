const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tesistaSchema = new schema({
    Primer_Nombre: { type: String, require: true },
    Segundo_Nombre: { type: Number, require: false },
    Primer_Apellido: { type: Number, require: true },
    Segundo_Apellido: { type: String, require: false },
    Numero_Carnet: { type: String, unique: true, require: true },
    Correo: { type: String, unique: true, require: true },
    Sexo: { type: String, require: true },
    Sede: { type: String, require: true },
    Programa: { type: String, require: true },
    Estado: { type: String, require: true },
});

module.exports = mongoose.model("tesistas", tesistaSchema);