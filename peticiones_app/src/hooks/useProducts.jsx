
import { useState, useEffect } from 'react'
import UseLayout from './UseLayout'
import { axiosClient } from '../axios'

const useProducts = () => {
  const { showLoading, hideLoading } = UseLayout()
  const [productos, setProductos] = useState([])

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

  useEffect(() => {

    getAllProducts()

  }, []);

  return {
    productos,
    getAllProducts,
    saveProduct
  }
}

export default useProducts