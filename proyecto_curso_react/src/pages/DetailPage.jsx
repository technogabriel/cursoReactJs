import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import CartDetail from '../components/Cart/CartDetail'
import { equipos } from '../data'
import Spinner from '../shared/Spinner/Spinner'


const DetailPage = () => {
  const [loading,setLoading] = useState(false)
  const [equipo, setEquipo] = useState(null)
  const [searchParam, setSearchParam] = useSearchParams()
  console.log(searchParam.get('q'))
  const {id} = useParams()

  const findEquipo=()=>{
    setLoading(true)
    const result = equipos.find((item)=> item.id ===id)
    if(result){
      setEquipo(result)
    }
    setLoading(false)
  }

  useEffect(() => {
   setLoading(true)

   setTimeout(()=>{
    findEquipo()
   },3000);

  }, []);

  return (
    <>
    {loading && <h1><Spinner/></h1>}
    {!loading && !equipo && <h1>equipo no registrado</h1>}
    {!loading && equipo && <CartDetail img={equipo.img} nombre ={equipo.titulo} />}
    </>
  )
}

export default DetailPage