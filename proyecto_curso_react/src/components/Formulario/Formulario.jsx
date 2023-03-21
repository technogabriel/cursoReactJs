import React, { useState } from 'react'

const Formulario = (props) => {

  const {condicional}= props


  const [form, setForm] = useState({
    email: '',
    password: ''

  })

  const { email, password } = form

  const handleChange=(e)=>{
    const{value,name}= e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit=(e)=>{
    //para que no recargue la pagina
    e.preventDefault()
    console.log(form)
    //reset:
    setForm({
      email: '',
      password: ''
  
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '40%', margin: '40px auto' }}>
        <h1>Formulario</h1>
        <input onChange={handleChange} value={email} name='email' placeholder='usuario@gmail.com' type="email" />
        <br />
        <input onChange={handleChange} value={password} name='password' placeholder='*****' type="password" />
        <br />
        <input type="submit" value="enviar" />
      </form>
      {/*Renderizado condicional && */}
      {condicional && <div>Aca el condicional llego true </div>}
    </div>
  )
}

export default Formulario