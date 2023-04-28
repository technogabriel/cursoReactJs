import React from 'react'
import { createContext } from 'react'
import UseLayout from '../hooks/UseLayout'
import useProducts from '../hooks/useProducts'
import UseFavorite from '../hooks/UseFavorite'

export const productContext = createContext('')
const ProductProvider = ({children}) => {

  const {loading } = UseLayout()
  const {productos,getAllProducts,saveProduct, edit,editProduct, editProductFields,handleEditProductFields,
    handleResetEditProductFields} = useProducts()

  const {favoritos, getAllFavorites, isInFavorites, addFavoritos,removeFavoritos} = UseFavorite()

  return (
    <productContext.Provider value={{
      loading,
      productos,
      favoritos,
      edit,
      editProductFields,
      getAllFavorites,
      getAllProducts,
      isInFavorites,
      addFavoritos,
      removeFavoritos,
      saveProduct,
      editProduct,
      handleEditProductFields,
      handleResetEditProductFields
      }}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider