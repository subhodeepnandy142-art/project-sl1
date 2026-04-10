import React from 'react'

function Alert(props) {
  const capitalize = (word)=> {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.toggleAlert && <div className={`alert alert-${props.toggleAlert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.toggleAlert.type)}:</strong> {props.toggleAlert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
