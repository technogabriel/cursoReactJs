
import { useState, useEffect } from 'react'
import UseLayout from './UseLayout'
import { axiosClient } from '../axios'

const useProducts = () => {
  const { showLoading, hideLoading } = UseLayout()
  const [productos, setProductos] = useState([])
  const [edit,setEdit] = useState(false)
  const [editProductFields, setEditProductFields] = useState(null) 


  const getAllProducts = async () => {
    showLoading()
    try {
      const res = await axiosClient.get('/productos')
      setProductos(res.data)
      hideLoading()
    } catch (error) {
      console.log(error)
      hideLoading()
    }
  }

  const saveProduct = async (objeto) => {
    showLoading()
    try {
      await axiosClient.post('/productos', objeto)
      await getAllProducts()
      hideLoading()
    } catch (error) {
      console.log(error)
      hideLoading()
    }
  }

  const editProduct = async (objeto) => {
    showLoading()
    try {
      await axiosClient.put(`/productos/${objeto.id}`, objeto)
      await getAllProducts()
      alert('Producto Editado')
      handleResetEditProductFields()
      hideLoading()
    } catch (error) {
      console.log(error)
      hideLoading()
    }
  }

  const handleEditProductFields =(objeto) => {
    setEdit(true)
    setEditProductFields(objeto)
  }
  const handleResetEditProductFields = ()=>{
    setEdit(false)
    setEditProductFields(null)
  }

  useEffect(() => {

    // eslint-disable-next-line
    getAllProducts()

    // eslint-disable-next-line
  }, []);

  return {
    productos,
    edit,
    editProductFields,
    getAllProducts,
    saveProduct,
    editProduct,
    handleEditProductFields,
    handleResetEditProductFields

  }
}

export default useProducts