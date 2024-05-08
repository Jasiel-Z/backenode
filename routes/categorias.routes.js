const router = require('express').Router();
const categorias = require('../controllers/categorias.controller')

//GET categorias
router.get('/', categorias.getAll);

//GET categorias con id 5
router.get('/:id', categorias.get);

// POST categoria
router.post('/',categorias.create);

// PUT categoria con id 5
router.put('/:id', categorias.update);

// DELETE categoria con id 5
router.delete('/:id',categorias.delete);


module.exports = router