import React from 'react'
import styles from './PokemonCard.module.css'

class PokemonCard extends React.Component {
    state = {
        name: '',
        image: ''
    }

    render () {
        const clases = styles

        return (
            <div className={clases.card}>
                <img src={ this.props.image } alt="Pokemon" className={clases.image}></img>
                <h2 className={clases.name}>{ this.props.name }</h2>
            </div>
        )
    }
}

export default PokemonCard