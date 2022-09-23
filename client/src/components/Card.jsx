import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Card.module.css";

export default function Card({ id, image, name, type }) {
  return (
    <div>
      <div className={styles.infocontainer}>
        <div className={styles.cardclearfix}>
          <div className={styles.cardbody}>
            <h2 className={styles.titlepokemon}>{name}</h2>
            <strong>Type: </strong><span>{type}</span>
          </div>
          <div>
            <br />
            <Link className={styles.buttondetail} to={`/pokemons/${id}`}>
              Read
            </Link>
          </div>
        </div>
        <div>
          <img className={styles.imgperfil} src={image} alt="PokemonImage" />
        </div>
      </div>
    </div>
  );
}
