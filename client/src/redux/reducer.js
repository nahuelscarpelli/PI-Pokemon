import {
  GET_ALL,
  GET_DETAIL,
  GET_POKEMONS_BY_NAME,
  FILTER_BY_VALUE,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  GET_TYPES,
} from "./action";

const initialState = {
  pokemons: [],
  totalpokemons: [],
  details: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        pokemons: action.payload,
        totalpokemons: action.payload,
      };
    case GET_POKEMONS_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FILTER_BY_VALUE:
      const allpokemons = state.totalpokemons;
      const statusFiltered =
        action.payload === "All"
          ? allpokemons
          : allpokemons.filter((pokemon) => {
              if (pokemon.types.length) {
                if (pokemon.types.find((d) => d.name === action.payload))
                  return pokemon;
                if (pokemon.types.find((type) => type === action.payload))
                  return pokemon;
              }
              return null;
            });
      return {
        ...state,
        pokemons: statusFiltered,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "sort-a-z"
          ? state.pokemons.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              else return -1;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              else return 1;
            });
      return {
        ...state,
        pokemons: sortedArr,
      };
    case ORDER_BY_SCORE:
      let sortedAr =
        action.payload === "sort-attack-up"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) return 1;
              else return -1;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) return -1;
              else return 1;
            });
      return {
        ...state,
        pokemons: sortedAr,
      };
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    default:
      return state;
  }
}
