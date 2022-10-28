const Habitacion = require("../models/habitaciones.model")

//response de si funcionó no haga nada
let response ={
    msg:"",
    exito: false
}

//15. Funcion captura de datos para nuevo empleado (captura pero no salva)
 exports.create = function(req,res){
    let habitacion = new Habitacion({
        id_hab: req.body.id_hab,
        cama: req.body.cama,
        nombre_hab: req.body.nombre_hab,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        bano: req.body.bano,

    })
    habitacion.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar habitación"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "La habitación se guardó correctamente"
        res.json(response)
     })
}
