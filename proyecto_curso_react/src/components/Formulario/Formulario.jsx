import React, { useState, useEffect } from 'react'
import Input from '../../shared/Input'

const Formulario = (props) => {
    //validacion
    //no es dinamico
    const {initialState, inputs,formTitle, onSubmit,toggleEnviado} = props
    const [form, setForm ] = useState(initialState)

    const handleChange=(e)=>{
        const{name,value} = e.target

        setForm({
            ...form,
            [name]:value
        })

    }

    const handleSubmit =(e)=>{
        onSubmit(e,form)
        toggleEnviado()
    }

    useEffect(() => {
        //forzar el re-render para cambiar el estado
        //borrar el return que trae por default
        setForm(initialState)
    }, [initialState]);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>{formTitle || 'Titulo'}</h1>
            {/*Inputs*/}
            {inputs?.map(({name,type,id,placeholder,required})=>(
                <Input 
                name={name}
                type={type} 
                key={id} 
                placeholder={placeholder}
                required={required}
                onChange={handleChange}
                />
            ))}
            <button>Enviar</button>
            {/*<input type="email" />
            <input type="password" />
            <button>Enviar</button>*/}
        </form>
    </div>
  )
}

export default Formulario