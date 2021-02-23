import React, { useState } from 'react'
import styles from './PokemonCard.module.css'

const PokemonCard = (props) => {
    const [name] = useState(props.name)
    const [imageIndex] = useState(props.imageIndex)

    const clases = styles

    const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <div className={clases.card}>
            <img src={`${imageURL}${imageIndex+1}.png`} alt="Pokemon" className={clases.image}></img>
            <h2 className={clases.name}>{name}</h2>
        </div>
    )

}

export default PokemonCard