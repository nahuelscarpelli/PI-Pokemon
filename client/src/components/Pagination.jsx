import React from "react";
import styles from "../css/Cards.module.css";

export default function Pagination({ pokemonpage, stateOnlyPokemons, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(stateOnlyPokemons / pokemonpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers &&
          pageNumbers.map((number, k) => (
            <button key={k} onClick={() => pagination(number, k)}>
              <li className={styles.paginationlist}>{number}</li>{" "}
            </button>
          ))}
      </ul>
    </nav>
  );
}
