import React from 'react'
import { connect } from 'react-redux'
// import styles from './ModalView.module.css'
import { Modal } from 'react-bootstrap';
import { setShow } from '../../redux/actions/modalViewActions'

const ModalView = ({ setShow, modalViewState}) => {
    // const clases = styles

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
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
}

const mapStateToProps = (state) => {
    return {
      modalViewState: state.modalView.showWindow
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
