import React,{useState} from 'react'
import Button from '../../shared/Button'

const Counter = () => {
    const [contador,setContador] = useState(0);
    const [nombre,setNombre] =useState('Adan')

    const sumar= () => setContador(contador+1)
    const restar = ()=> setContador(contador-1)

    const cambiarNombre =()=> setNombre('Gabriel')

  return (
    <div className = 'd-flex justify-content-around'>
        <Button onClick={sumar} buttonText='sumar'/>
        <h1>Nombre:{nombre}</h1>
        <h1>Contador: {contador}</h1>
        <Button onClick={restar} buttonText='restar'/>  
        <Button onClick={cambiarNombre} buttonText='cambiar nombre'/>  
    </div>
  )
}

export default Counter