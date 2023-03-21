import React from 'react'

const Input = (props) => {
    const {
        type,
        placeholder,
        name,
        className,
        id,
        onChange,
        onBlur,
        required
    } = props

  return (
    <input
    type={type || 'text'}
    placeholder ={placeholder || ''}
    name = {name || null}
    className ={className || null}
    id= {id || null}
    onChange = {onChange || null}
    onBlur = {onBlur || null}
    required={required || false}
    />
  )
}

export default Input