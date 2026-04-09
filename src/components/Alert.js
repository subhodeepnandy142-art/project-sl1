import React from 'react'

function Alert(props) {
  return (
    props.toggleAlert && <div className={`alert alert-${props.toggleAlert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.toggleAlert.type}:</strong> {props.toggleAlert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
