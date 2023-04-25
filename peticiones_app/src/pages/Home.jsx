import React, { useContext } from 'react'
import { productContext } from '../context/ProductProvider'
import Card from '../components/Card/Card'


const Home = () => {
  const {productos, isInFavorites,addFavoritos, removeFavoritos} = useContext(productContext)
  return (
    <div className='container d-flex flex-column align-items-center my-5'>
      {productos?.map((product)=>(
        <Card key={product.id}{...product} addFavoritos={addFavoritos} removeFavoritos={removeFavoritos} isInFavorites={isInFavorites}/>
      ))}

    </div>
  )
}

export default Home