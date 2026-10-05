const {Router} = require('express');

const enrutador = Router();

enrutador.get('/usuarios', (req, res) => {
    res.json({mensaje: 'Ruta de usuarios'})
})

module.exports = enrutador
