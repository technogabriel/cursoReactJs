import React from 'react'

const Button = ({className='btn btn-primary',buttonText="Button",onClick, disabled = false}) => {
  return (
    <button disabled={disabled} 
    onClick={onClick} 
    className={className}
    >
    {buttonText}
    </button>
  )
}

export default Button