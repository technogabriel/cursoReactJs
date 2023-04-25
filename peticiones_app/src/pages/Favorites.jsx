import React, { useContext } from 'react'
import { productContext } from '../context/ProductProvider'
import Card from '../components/Card/Card'



const Favorites = () => {

    const {favoritos, isInFavorites,removeFavoritos} = useContext(productContext)
  return (
    <div className='container d-flex flex-column align-items-center my-5'>
      {favoritos.length < 1 ? <h1 className='text-center fs-3'>No hay favoritos </h1> : favoritos?.map((favorito)=>(
        <Card key={favorito.id}{...favorito} 
        //addFavoritos={addFavoritos} 
        removeFavoritos={removeFavoritos} 
        isInFavorites={isInFavorites}
        isFavoritos
        />
      ))}

    </div>
  )
}

export default Favorites