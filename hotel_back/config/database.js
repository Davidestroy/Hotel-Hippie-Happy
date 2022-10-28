const mongoose = require("mongoose"); //se requiere la dependencia mongoose

const host = "localhost";
const port = "27017"; //puerto de mongo
const db = "hotel";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;//constante mediante el cual se conecta mongo mendiante ese host, ese port, y ese db, se llama hr porque es una plantilla por defecto de mongo de base de datos, para realizar las pirmeras pruebas (gente)
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb conection error"))
}