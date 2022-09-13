const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

// GET ALL POKEMONS / QUERY

function getPokemons(req, res, next) {
  const nameQuery = req.query.name;
  var remotePokemons = [];
  var localPokemons = [];
  if (nameQuery) {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?" + nameQuery.toLowerCase())
      .then((apiResponse) => {
        remotePokemons = apiResponse.data.results.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(nameQuery);
        });
        return Pokemon.findAll({ include: [Type] }); // llamado a db
      })
      .then((localResponse) => {
        localPokemons = localResponse.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(nameQuery);
        });
        return res.json([...localPokemons, ...remotePokemons].slice(0, 9)); //final
      })
      .catch((error) => next(error));
  } else {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((apiResponse) => {
        remotePokemons = apiResponse.data.results;
        return Pokemon.findAll({ include: [Type] });
      })
      .then((localResponse) => {
        return res.json([...localResponse, ...remotePokemons]);
      })
      .catch((error) => next(error));
  }
}

function getPokemonById(req, res, next) {
    const id = req.params.id;
  if (id.length === 36) {
    Pokemon.findByPk(id, { include: Type }).then((pokemon) => {
      return res.json(pokemon);
    });
  } else {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => {
        return res.json({
          name: response.data.name,
          image: response.data.sprites.other["official-artwork"].front_default,
          type: response.data.types.map((t) => t.type.name),
          hp: response.data.stats.find((e) => e.stat.name === "hp"),
          attack: response.data.stats.find((e) => e.stat.name === "attack").base_stat,
          defense: response.data.stats.find((e) => e.stat.name === "defense").base_stat,
          speed: response.data.stats.find((estado) => estado.stat.name === "speed").base_stat,
          height: response.data.height,
          weight: response.data.weight,
        });
      })
      .catch((error) => next(error));
  }
}

function createPokemon(req, res, next) {}

module.exports = {
  getPokemons,
  getPokemonById,
  createPokemon,
};
