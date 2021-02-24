import React, { useState } from 'react'
import styles from './PokemonCard.module.css'
import { Card, Col, Image } from 'react-bootstrap';

const PokemonCard = (props) => {
  const [name] = useState(props.name)
  const [imageIndex] = useState(props.imageIndex)
  const [imageURL] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/')

  const clases = styles

  return (
    <div className={clases.component}>
      <Col>
        <Card className={clases.card}>
          <Image variant="top" src={`${imageURL}${imageIndex + 1}.png`} className={clases.image} fluid />
          <Card.Footer className={clases.footer}>
            <small className="text-muted">{name}</small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  )

}

export default PokemonCard