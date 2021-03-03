import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title><h1>Welcome to PokéApp</h1></Card.Title>
          <Card.Text>
            Project developed to apply the knowledge in React and Redux.
          </Card.Text>
          <Button
            as={NavLink}
            to='/' 
            variant='secondary'
          > 
            Open Pokémons List
          </Button>
        </Card.Body>
        <Card.Footer className='text-muted'>By Cristian Franco Bedoya for Talos Digital</Card.Footer>
      </Card>

    </div>
  )
}

export default Home
