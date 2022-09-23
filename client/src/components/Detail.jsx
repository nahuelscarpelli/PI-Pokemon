import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/action";

export default function Detail(props) {
  const dispatch = useDispatch();
  const pokemondetail = useSelector((state) => state.details) || [];

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
}, [dispatch])

  return (
    <div>
      <div className={styles.infocontainer}>
        <div>
          <img
            className={styles.imgperfil}
            src={pokemondetail.image}
            alt="pokemonimage"
          />
        </div>
        <div>
          <h2 className={styles.titlepokemon}>{pokemondetail.title}</h2>
        </div>
        <div className={styles.infocardwidth}>
          <p>Type: </p>
          <span>{pokemondetail.Type}</span>
          <p>Summary: {pokemondetail.summary}</p>
          <p>Dish Types: {pokemondetail.dishTypes}</p>
          <p>Health Score: {pokemondetail.healthScore}</p>
        </div>
        <div>
          <h3>Steps: {pokemondetail.instructions}</h3>
        </div>
        <Link to="/home">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}
