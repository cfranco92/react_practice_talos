import React from 'react'
import styles from './ModalView.module.css'
import { Modal, Image, Row, Col, Table} from 'react-bootstrap';
import DobleChartTool from '../DobleChartTool'

const ModalTwoPokemon = ({ selectedPokemons, modalViewState, cleanPokemonArray }) => (
    <Modal
          size="m"
          show={modalViewState}
          onHide={cleanPokemonArray}
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
                        <Image variant="top" src={`${selectedPokemons[0].image}`} className={styles.image} fluid />
                      </Col>
                      <Col xs={6} md={6}>
                        <Image variant="top" src={`${selectedPokemons[1].image}`} className={styles.image} fluid />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12}>
                    <hr />
                    <Table borderless size='sm' className={styles.tableInformation}>
                      <thead>
                        <tr>
                          <td>{selectedPokemons[0].height}m</td>
                          <th>Height</th>
                          <td>{selectedPokemons[1].height}m</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedPokemons[0].weight}kg</td>
                          <th>Weight</th>
                          <td>{selectedPokemons[1].weight}kg</td>
                        </tr>
                        <tr>
                          <td>{selectedPokemons[0].gender}</td>
                          <th>Gender</th>
                          <td>{selectedPokemons[1].gender}</td>
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
                <h1 className={styles.name}>Stats</h1>
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
)

export default ModalTwoPokemon
