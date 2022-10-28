const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const HabitacionesSchema = new Schema({
    id_hab:{type: String, required:true, max:60},
    cama:{type: String, required:true, max:60},
    nombre_hab :{type: String, required:true, max:60},
    precio:{type: Number, required :true },
    descripcion:{type: String, required: true, max:1000},
    bano:{type: String, required:true, max:20}
});
module.exports = mongoose.model("habitaciones", HabitacionesSchema);