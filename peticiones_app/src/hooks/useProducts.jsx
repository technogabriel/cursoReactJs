
import { useState } from 'react'
import UseLayout from './UseLayout'
import { axiosClient } from '../axios'

const useProducts = () => {
    const {showLoading,hideLoading} = UseLayout()
    const [productos, setProductos]=useState([])
   
    const getAllProducts = async ()=>{
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

  return {
    productos,
    getAllProducts
  }
}

export default useProducts