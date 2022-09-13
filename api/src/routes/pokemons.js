const { Router } = require('express');
const router = Router();

const { getPokemons, getPokemonById, createPokemon } = require('../controllers/pokemon.controller.js');

router.get('/', getPokemons);
router.get('/:id', getPokemonById);
router.post('/', createPokemon);

module.exports = router;