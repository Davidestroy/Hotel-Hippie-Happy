const mongoose = require('mongoose'); //declaracion dependencia mongoose (require)
const Schema = mongoose.Schema;

//11. nuevo esquema para usuarios
const AdministradoresSchema = new Schema({
    cedula:{type: String, required:false, max:60},
    nombre:{type: String, required:false, max:60},
    apellido_p:{type: String, required :false, max:40 },
    apellido_m:{type: String, required: false, max:40},
    telefono:{type: String, required:false, max:15},
    pass:{type: String, required:true, max:60},
    mail:{type: String, required:true, max:70},
    direccion:{type: String, rquired: false, max:150}
});
module.exports = mongoose.model("administradores", AdministradoresSchema);