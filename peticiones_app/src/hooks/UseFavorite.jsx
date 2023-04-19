
import { axiosClient } from '../axios'
import { useState } from 'react'
import UseLayout from './UseLayout'

const UseFavorite = () => {
  
    const {showLoading,hideLoading} = UseLayout()
    const [favoritos,setFavorites] = useState([])

    const getAllFavorites = async () =>{
        showLoading()
        try {
            const res = await axiosClient.get('/favoritos')
            setFavorites(res.data)
            hideLoading()
            
        } catch (error) {
            console.log(error)
            hideLoading()
            
        }
    }

    return {
        favoritos,
        getAllFavorites

  }
}

export default UseFavorite