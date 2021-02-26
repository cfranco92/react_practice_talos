import React from 'react'
import { connect } from 'react-redux'
import styles from './ModalView.module.css'
import { Modal, Image, Row, Col, Table, Button } from 'react-bootstrap';
import ChartTool from '../ChartTool'
import DobleChartTool from '../DobleChartTool'
import { setShow } from '../../redux/actions/modalViewActions'
import { cleanSelectedPokemons } from '../../redux/actions/pokemonsActions'
import { setShowToast } from '../../redux/actions/pokemonsActions'

const ModalView = (
  {
    setShow,
    modalViewState,
    selectedPokemons,
    cleanSelectedPokemons,
    setShowToast,
    showToast
  }) => {
  const clases = styles


  const handleClick = (e) => {
    setShow(modalViewState)
    cleanSelectedPokemons()
    if (showToast) {
      setShowToast()
    }
  }

  const handleCompareClick = (e) => {
    setShow(modalViewState)
    setShowToast()
  }

  return (
    <>
      {showToast && selectedPokemons.length > 1
        ?
        // VIEW FOR 2 POKEMONS
        <Modal
          size="m"
          show={modalViewState}
          onHide={handleClick}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <div>
                {String(selectedPokemons[0].name).toUpperCase()} VS. {String(selectedPokemons[1].name).toUpperCase()}
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div >
              <div>
                <Row>
                  <Col xs={12} md={12}>
                    <Row>
                      <Col xs={6} md={6}>
                        <Image variant="top" src={`${selectedPokemons[0].image}`} className={clases.image} fluid />
                      </Col>
                      <Col xs={6} md={6}>
                        <Image variant="top" src={`${selectedPokemons[1].image}`} className={clases.image} fluid />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12}>
                    <hr />
                    <Table borderless size='sm' className={clases.tableInformation}>
                      <thead>
                        <tr>
                          <td className={clases.tableInformation}>{selectedPokemons[0].height}m</td>
                          <th>Height</th>
                          <td>{selectedPokemons[1].height}m</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedPokemons[0].weight}kg</td>
                          <th>Weight</th>
                          <td>{selectedPokemons[1].height}m</td>
                        </tr>
                        <tr>
                          <td>Female</td>
                          <th>Gender</th>
                          <td>Female</td>
                        </tr>
                        <tr>
                          <td>
                            {
                              selectedPokemons[0].abilities.map((abilities) => {
                                return (
                                  <div key={abilities.ability.name}>
                                    {abilities.ability.name}
                                  </div>
                                )
                              })
                            }
                          </td>
                          <th>Abilities</th>
                          <td>
                            {
                              selectedPokemons[1].abilities.map((abilities) => {
                                return (
                                  <div key={abilities.ability.name}>
                                    {abilities.ability.name}
                                  </div>
                                )
                              })
                            }
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <hr />
                <h1 className={clases.name}>Stats</h1>
                <DobleChartTool
                  stats={selectedPokemons[0].stats.map((stat) => {
                    return stat.stat.name
                  })}
                  bases={selectedPokemons[0].stats.map((stat) => {
                    return stat.base_stat
                  })}
                  name={selectedPokemons[0].name}
                  color={selectedPokemons[0].color.name}
                  stats2={selectedPokemons[1].stats.map((stat) => {
                    return stat.stat.name
                  })}
                  bases2={selectedPokemons[1].stats.map((stat) => {
                    return stat.base_stat
                  })}
                  name2={selectedPokemons[1].name}
                  color2={selectedPokemons[1].color.name}
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>

        :
        // VIEW FOR 1 POKEMON
        <Modal
          size="m"
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
                    <Button className={clases.modalButton} onClick={handleCompareClick} variant="secondary">Compare to...</Button>
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
                        {pokemon.flavor_text_entries[1].flavor_text}
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
                    <ChartTool
                      stats={pokemon.stats.map((stat) => {
                        return stat.stat.name
                      })}
                      bases={pokemon.stats.map((stat) => {
                        return stat.base_stat
                      })}
                      name={pokemon.name}
                      color={pokemon.color.name}
                    />
                  </div>

                </div>
              )
            })}
          </Modal.Body>
        </Modal>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modalViewState: state.modalView.showWindow,
    selectedPokemons: state.pokemons.selectedPokemons,
    showToast: state.pokemons.showToast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
    setShowToast: () => dispatch(setShowToast()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalView)
