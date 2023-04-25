
import { axiosClient } from '../axios'
import { useState, useEffect } from 'react'
import UseLayout from './UseLayout'

const UseFavorite = () => {

    const { showLoading, hideLoading } = UseLayout()
    const [favoritos, setFavorites] = useState([])

    const getAllFavorites = async () => {
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

    const addFavoritos = async (objeto) => {
        showLoading()
        try {
            await axiosClient.post('/favoritos', objeto)
            await getAllFavorites()
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()

        }
    }

    const removeFavoritos = async (id) => {
        showLoading()
        try {
            await axiosClient.delete(`/favoritos/${id}`)
            await getAllFavorites()
            hideLoading()

        } catch (error) {
            console.log(error)
            hideLoading()

        }
    }

    const isInFavorites = (id) => favoritos.some((favorito) => favorito.id === id);

    useEffect(() => {

        getAllFavorites()
        // eslint-disable-next-line
    }, []);


    return {
        favoritos,
        getAllFavorites,
        isInFavorites,
        addFavoritos,
        removeFavoritos


    }
}

export default UseFavorite
