import React, { useState } from 'react'
import styles from './PokemonCard.module.css'

const PokemonCard = (props) => {
    const [name] = useState(props.name)
    const [image] = useState(props.image)

    const clases = styles

    return (
        <div className={clases.card}>
            <img src={image} alt="Pokemon" className={clases.image}></img>
            <h2 className={clases.name}>{name}</h2>
        </div>
    )

}

export default PokemonCard