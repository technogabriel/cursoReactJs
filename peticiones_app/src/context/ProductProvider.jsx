import React from 'react'
import { createContext } from 'react'
import UseLayout from '../hooks/UseLayout'
import useProducts from '../hooks/useProducts'
import UseFavorite from '../hooks/UseFavorite'

export const productContext = createContext('')
const ProductProvider = ({children}) => {

  const {loading } = UseLayout()
  const {productos,getAllProducts,saveProduct} = useProducts()
  const {favoritos, getAllFavorites, isInFavorites, addFavoritos,removeFavoritos} = UseFavorite()

  return (
    <productContext.Provider value={{
      loading,
      productos,
      favoritos,
      getAllFavorites,
      getAllProducts,
      isInFavorites,
      addFavoritos,
      removeFavoritos,
      saveProduct
      }}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider