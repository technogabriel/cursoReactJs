import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

const Card = (props) => {
    const { id, image, name, version, price, year, noButton } = props
    const navigate = useNavigate()
    const handleNavigate = () => navigate(`/item/${id}`)

    return (
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top w-50 h-50 mx-auto" alt="celu-image" />
            <div className="card-body">
                <h5 className="card-title">Nombre : {name}</h5>
                <h6 className='fs-4 text-center'>Version : {version}</h6>
                <p className="card-text">Precio: {price}</p>
                <div className='my-5'>
                    <span>Año : {year}</span>
                </div>
                    {!noButton && <button onClick={handleNavigate} className="btn btn-primary">Mas Info</button>}
            </div>
            {noButton && <ItemCount producto ={{...props}} />}
        </div>
    )
}

export default Card