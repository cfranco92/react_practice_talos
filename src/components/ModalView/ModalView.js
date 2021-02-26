import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './ModalView.module.css'
import { Modal, Image, Row, Col, Table } from 'react-bootstrap';
import ChartTool from '../ChartTool'
import { setShow } from '../../redux/actions/modalViewActions'

const ModalView = ({ setShow, modalViewState, selectedPokemons }) => {
  console.log(selectedPokemons[1])
  // const [pokemonImageIndex] = useState(selectedPokemons[1].image)
  // const [pokemonName] = useState(selectedPokemons[1].name)
  const clases = styles


  const handleClick = (e) => {
    setShow(modalViewState)
  }

  return (
    <>
      {/* <Button onClick={handleClick}>Large modal</Button> */}
      <Modal
        size="lg"
        show={modalViewState}
        onHide={handleClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {selectedPokemons.map((pokemon, index = 1) => {
              return (
                <div key={index + Math.random()}>
                  {String(pokemon.name).toUpperCase()}
                </div>
              )
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPokemons.map((pokemon, index = 1) => {
            return (
              <div key={index + Math.random()}>
                <div>
                  <Row>
                    <Col xs={4} md={4}>
                      <Image variant="top" src={`${pokemon.image}`} className={clases.image} fluid />
                    </Col>
                    <Col xs={8} md={8}>
                        Description going to be here
                      <hr />
                        <Table borderless size='sm'>
                          <thead>
                            <tr>
                              <th>Height</th>
                              <th>Weight</th>
                              <th>Gender</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{pokemon.height}m</td>
                              <td>{pokemon.weight}kg</td>
                              <td>Female</td>
                            </tr>
                          </tbody>
                        </Table>
                        <Table borderless size='sm'>
                          <thead>
                            <tr>
                              <th>Abilities</th>
                              <th>Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul>
                                  {
                                    pokemon.abilities.map((abilities) => {
                                      return (
                                        <li key={abilities.ability.name}>
                                          {abilities.ability.name}
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  {
                                    pokemon.types.map((types) => {
                                      return (
                                        <li key={types.type.name}>
                                          {types.type.name}
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                    </Col>
                  </Row>
                  <hr />
                  <h1 className={clases.name}>Stats</h1>
                  <ChartTool />
                </div>

              </div>
            )
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modalViewState: state.modalView.showWindow,
    selectedPokemons: state.pokemons.selectedPokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalView)
