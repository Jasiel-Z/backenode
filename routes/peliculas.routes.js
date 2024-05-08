const router = require('express').Router();
const peliculas = require('../controllers/peliculas.controller')

//GET peliculas
router.get('/', peliculas.getAll);

//GET categorias con id 5
router.get('/:id', peliculas.get);

// POST categoria
router.post('/',peliculas.create);

// PUT categoria con id 5
router.put('/:id', peliculas.update);

// DELETE pelicula
router.delete('/:id',peliculas.delete);


router.post('/:id/categoria',peliculas.asignaCategoria);


router.delete('/:id/categoria/:idcategoria',peliculas.eliminaCategoria);


module.exports = router