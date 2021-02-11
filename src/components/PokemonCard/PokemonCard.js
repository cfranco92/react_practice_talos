import React from 'react'
import styles from './PokemonCard.module.css'

class PokemonCard extends React.Component {
    state = {
        name: '',
        image: ''
    }

    render () {
        const clases = styles.card

        return (
            <div className={clases}>
                <img src={ this.props.image } alt="Pokemon"></img>
                <h2>{ this.props.name }</h2>
            </div>
        )
    }
}

export default PokemonCard