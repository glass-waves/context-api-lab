import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/character.css';
import { useTheme } from '../state/ThemeProvider';

const Character = ({ character }) => {
    const theme = useTheme();

    return (
        <div
            data-testid="listitem"
            className={styles.characterDiv}
            style={{ borderColor: theme ? 'white' : 'black' }}
        >
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
};

Character.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        origin: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    }),
};

export default Character;
