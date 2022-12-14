import axios from "axios";

export const GET_ALL = "GET ALL";
export const RUTA_GET = "http://localhost:3001/pokemons";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_TYPES = "GET_TYPES;";

// LLAMANDO TODO
export function getAll() {
  return async function pedido(dispatch) {
    let aux = await axios.get(RUTA_GET);
    return dispatch({
      type: GET_ALL,
      payload: aux.data,
    });
  };
}

// LLAMANDO POR NOMBRE (SEARCH)
export function getPokemonByName(namePokemon) {
  return async function (dispatch) {
    let response = await axios.get(
      `http://localhost:3001/pokemons?name=${namePokemon}`
    );
    return dispatch({ type: GET_POKEMONS_BY_NAME, payload: response.data });
  };
}

// LLAMANDO DETALLES

export function getDetail(id) {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({ type: GET_DETAIL, payload: response.data });
  };
}

// FILTRANDO POR TYPES

export function filterPokemonByTypes(payload) {
  console.log(payload);
  return {
    type: FILTER_BY_VALUE,
    payload,
  };
}

// FILTRANDO POR ORDEN

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
// FILTRANDO POR SCORE

export function orderByScore(payload) {
  return {
    type: ORDER_BY_SCORE,
    payload,
  };
}

// GET TYPES

export function getTypes() {
  return async function (dispatch) {
    var response = await axios("http://localhost:3001/types", {});
    return dispatch({
      type: GET_TYPES,
      payload: response.data,
    });
  };
}

/// POST

export function postPokemon(payload) {
  return async function () {
    const response = await axios.post("http://localhost:3001/pokemons", payload);
    return response;
  };
}
