import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version, type, isDisasbled}) {
  return (
    <button type={type} disabled={isDisasbled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}


Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisasbled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisasbled: PropTypes.bool,
}


export default Button