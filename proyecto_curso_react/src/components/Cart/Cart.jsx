import React from 'react'
import defaultImage from '../../assets/logo192.png'
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {

  const {img, title, description, buttonName, buttonClassName,id} = props;
  const handleClick = () => alert('se clickeo');
  
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={img || defaultImage} className="card card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title || 'default title'}</h5>
      <p className="card-text">{description || 'Lorem ipsu'}</p>
      <Button className = {buttonClassName} buttonText = {buttonName}  onClick={handleClick}></Button>
      <Link to={`/detail/${id}`} className='btn btn-info'>Ir al detalle</Link>
      {/*<button className={buttonClassName || "btn btn-primary"}>{buttonName || 'Ver mas'}</button>*/}
    </div>
  </div>
  )
}

export default Cart