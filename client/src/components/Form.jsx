import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes } from '../redux/action'
import styles from '../css/Form.module.css'
import Milanga from '../img/Milanga.jpg'

export default function Form() {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        instructions: "",
        image: `${Milanga}`,
        types: "",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postPokemon(input))
        alert("Created")
        setInput({
            name: "",
            summary: "",
            healthScore: "",
            instructions: "",
            types: []
        })
    }

    useEffect(() => {
        dispatch(getTypes());
    },)

    return (
        <div className={styles.createform}>
            <h2 className={styles.title}>Complete the form to add a new pokemon</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <input className={styles.inputformcreate} type="text" placeholder='Title' value={input.title} name='title' onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <div>
                        <input className={styles.inputformcreate} type="text" placeholder='Summary' value={input.summary} name='summary' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div>
                    <div>
                        <input className={styles.inputformcreate} type="number" placeholder='Health Score' value={input.healthScore} name='healthScore' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div>
                    <input className={styles.inputformcreate} type="text" placeholder='Instructions' value={input.instructions} name='instructions' onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <select className={styles.inputformcreate} onChange={(e) => handleSelect(e)}>
                        <option disabled selected>Select Types</option>
                        {types.map((d) => (
                            <option value={d.name}>{d.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className={styles.buttons} type='submit'>Create Pokemon</button>
                </div>
            </form>
            <Link to='/home'><p>Back</p></Link>
        </div>
    )
}