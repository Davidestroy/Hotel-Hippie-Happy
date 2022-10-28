const Usuario = require("../models/usuarios.model")

//response de si funcionó no haga nada
let response ={
    msg:"",
    exito: false
}

//15. Funcion captura de datos para nuevo empleado (captura pero no salva)
 exports.create = function(req,res){
    let usuario = new Usuario({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        pass: req.body.pass,
        mail: req.body.mail,
        direccion: req.body.direccion

    })
    usuario.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar usuario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
     })
}
