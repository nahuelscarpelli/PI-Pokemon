import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/action";
import styles from "../css/FilterBar.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState("");
  

  function handleInput(e) {
    setNamePokemon(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
       if(namePokemon){
           dispatch(getPokemonByName(namePokemon));
          setNamePokemon("");    
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={(e)=>handleSubmit(e)}  className={styles.barsearch}>
        <input
           className={styles.inputsearch}
          type="text"
          placeholder="Search..."
          value={namePokemon}
          onChange={(e)=>handleInput(e)}
        />
      </form>
    </React.Fragment>
  );
}
