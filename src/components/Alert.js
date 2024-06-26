import React from 'react'

function Alert(props) {
  return (
    
    props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.msg}</strong>: {props.alert.type}
      </div>
    
  )
}

export default Alert