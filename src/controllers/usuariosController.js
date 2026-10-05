//importar servicio
const ingresar = require("../services/autenticarService")
const listarUsuarios = async (req, res) => {
    res.json({mensaje: "Ruta de listado de usuarios"})
}

module.exports = listarUsuarios