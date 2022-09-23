import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll, orderByName, orderByScore } from "../redux/action";
import Pagination from "./Pagination";
import styles from "../css/Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const stateOnlyPokemons = useSelector((state) => state.pokemons);

  // Seteo Paginado
  const [, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonpage] = useState(9); // de posición 0 a 8

  const indexOfLast = currentPage * pokemonpage; // 9
  const indexOfFirst = indexOfLast - pokemonpage; // 0
  const current = stateOnlyPokemons.slice(indexOfFirst, indexOfLast);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber); // seteo pagina actual en el numero de pagina
  };
  // Fin

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
    console.log(setCurrentPage(1));
  }
  function handleSortScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  // useEffect emula con una fc de callback component amount

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div>
      <div >
        <select
        className={styles.sortby}
          name="sortPokemons"
          id="sortPokemons"
          onChange={(e) => handleSort(e)}
        >
          <option value="">Sort Pokemons - Alphabetically</option>
          <option value="sort-a-z">A to Z</option>
          <option value="sort-z-a">Z to A</option>
        </select>
        <select
        className={styles.sortby}
          name="sortPokemons"
          id="sortPokemons"
          onChange={(e) => handleSortScore(e)}
        >
          <option value="">Sort Pokemons - Attack Score</option>
          <option value="sort-attack-up">Min- Max</option>
          <option value="sort-attack-down">Max- Min</option>
        </select>
      </div>
      <div>
        <Pagination
          pokemonpage={pokemonpage}
          stateOnlyPokemons={stateOnlyPokemons.length}
          pagination={pagination}
        />
      </div>
      <div className={styles.cardcontainer}>
        {current.length &&
          current.map((thepokemons, i) => (
            <Card
              key={i}
              id={thepokemons.id}
              image={thepokemons.image}
              name={thepokemons.name}
              type={thepokemons.types}
              attack={thepokemons.attack}
              defense={thepokemons.defense}
              hp={thepokemons.hp}
              speed={thepokemons.speed}
              height={thepokemons.height}
              weight={thepokemons.weight}
            />
          ))}
      </div>
    </div>
  );
}
