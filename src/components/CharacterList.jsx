import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/fetchCharacters';
import { useTheme } from '../state/ThemeProvider';
import Character from './Character';
import styles from '../styles/character.css'

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const theme = useTheme();
    useEffect(() => {
        fetchCharacters().then((result) => setCharacters(result.results));
    }, []);

    return (
        <div className={styles.list} style={{ backgroundColor: theme ? 'black' : 'white', color: theme ? 'white' : 'black' }}>
            {characters.map((character) => (
                <Character character={character} key={character.id} />
            ))}
        </div>
    );
};

export default CharacterList;
