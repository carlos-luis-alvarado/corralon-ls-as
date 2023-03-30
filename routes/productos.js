const express = require('express');
const { obtenerProductos, nuevoProducto, crearProducto, borrarProducto, obtenerProductoEditar, actualizarProducto, buscarProductos} = require('../controllers/productos');
const router = express.Router();


router.get('/',obtenerProductos);
// router.get('/:id',obtenerProducto);
router.get('/editar/:id',obtenerProductoEditar);
router.put('/editar/:id',actualizarProducto);
router.delete('/:id',borrarProducto);
router.get('/nuevo',nuevoProducto);
router.post('/nuevo',crearProducto);
router.get('/buscar',buscarProductos)


// router.get('/nuevo-producto',crearProducto);
//router.post('/crear-producto',crearProducto);

module.exports = router;