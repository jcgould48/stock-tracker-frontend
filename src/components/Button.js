import React from 'react'

const  Button =({children, onClick, type, style, className}) => {
    return (
<button 
    className={className}
    style={style} 
    onClick={onClick}
    type={type}
    >
    {children}
    </button> 
    )
}

export default Button