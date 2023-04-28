import React, { useContext } from 'react'
import { productContext } from '../context/ProductProvider'
import Card from '../components/Card/Card'
import { AiFillCloseCircle } from 'react-icons/ai'
import Formulario from '../components/Formulario/Formulario'



const Home = () => {
  const { productos, edit, editProductFields, handleEditProductFields, handleResetEditProductFields, isInFavorites, addFavoritos, removeFavoritos } = useContext(productContext)
  return (
    <div className='container d-flex flex-column align-items-center my-5'>
      {edit && (
        <div className='container'>
          <div className='d-flex justify-content-end w-75 fs-3'>
            <AiFillCloseCircle onClick={handleResetEditProductFields} />
          </div>
          <h1 className='fs-2 text-center'>Editar producto </h1>
          <Formulario
            edit={edit}
            initialState={editProductFields}
            buttonText={"editar"}
          />
        </div>

      )}
      {!edit && productos?.map((product) => (
        <Card key={product.id}
          {...product}
          addFavoritos={addFavoritos}
          removeFavoritos={removeFavoritos}
          isInFavorites={isInFavorites}
          handleEditProductFields={handleEditProductFields}

        />
      ))}

    </div>
  )
}

export default Home