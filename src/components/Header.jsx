import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor,
    }
    return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// this object sets a prop if no prop is passed in
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4',
    textColor:'#ff6a95',
}


export default Header