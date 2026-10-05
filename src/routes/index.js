//consolida las rutas
const {Router} = require("express")
//importsr enrutadores de las entidades
const pruebaRouter = require("./pruebaRouter")
const autenticarRouter = require("./autenticarRouter")
const usuariosRouter = require("./usuariosRoutes")

const enrutador = Router()

//ruta de prueba
enrutador.use("/rutaPrueba", pruebaRouter)
enrutador.use("/autenticar", autenticarRouter)
enrutador.use("/listado", usuariosRouter)

module.exports = enrutador