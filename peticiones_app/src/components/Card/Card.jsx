import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai'




const Card = (props) => {
    const { id, name, marca, modelo, precio, isInFavorites, addFavoritos, removeFavoritos, isFavoritos, handleEditProductFields } = props

    return (
        <div className="card w-75">
            <div className="card-body">{name}</div>
            <div className="card-body">{marca}</div>
            <div className="card-body">{modelo}</div>
            <div className="card-body">{precio}</div>
            <div className='d-flex justify-content-end px-5'>

                {!isFavoritos && isInFavorites(id) && (
                    <span
                        role={'button'}
                        className='fs-3'>
                        <AiFillHeart />
                    </span>
                )}
                {!isFavoritos && !isInFavorites(id) && (
                    <span
                        onClick={() => addFavoritos({ id, name, marca, modelo, precio })}
                        role={'button'}
                        className='fs-3 '>
                        <AiOutlineHeart />
                    </span>
                )}

                {isFavoritos && (
                    <span onClick={() => removeFavoritos(id)} role={'button'} className='fs-3 text-danger'><AiFillDelete /></span>
                )}
                <span className='fs-3'>
                    <AiFillEdit onClick={()=>handleEditProductFields({id,name, marca, modelo, precio})} />
                </span>
            </div>
        </div>
    )
}

export default Card