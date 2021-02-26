import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import styles from './Toast.module.css'
import { Toast } from 'react-bootstrap'

const ToastComponent = () => {
  const clases = styles

  // useEffect(() => {

  // })

  return (
    // <div
    //   aria-live="polite"
    //   aria-atomic="true"
    //   style={{
    //     position: 'relative',
    //     minHeight: '100px',
    //   }}
    // >
      <Toast
        className={clases.toast}
      >
        <Toast.Header closeButton={false}>
          {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
          <strong className="mr-auto">Comparing pokemon</strong>
        </Toast.Header>
        <Toast.Body>Pokemon's name</Toast.Body>
      </Toast>
    // </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastComponent)