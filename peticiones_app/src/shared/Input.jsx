import React from 'react'

const Input = (props) => {
    const {type="text",name,value,onChange} = props;
  return (
    <div className="mb-3">
    <label className="form-label">
        {name}
    </label>
    <input 
    value={value} 
    onChange={onChange} 
    name= {name} 
    type={type} 
    className="form-control" 
    />
  </div>
  )
}

export default Input