import React from 'react';
import styles from '../css/FilterBar.module.css';
import Search from './Search.jsx';
import Filter from './Filter.jsx'

export default function FilterBar({ onSearch }) {
    return (
        <div className={styles.filterbar}>
            <h2 className={styles.filterbar}>Henry's Pokedex</h2>
            <div>
                <Search />
            </div>
            <div>
                <Filter />
            </div>
        </div>
    )
}