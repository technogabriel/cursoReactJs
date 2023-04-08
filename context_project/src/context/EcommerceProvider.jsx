import React, { createContext, useState } from 'react'

export const EcommerContext = createContext('')

const EcommerceProvider = ({children}) => {

   const [carrito, setCarrito] =useState([])

const products =[{
    id:"1",
    image:'https://http2.mlstatic.com/D_NQ_NP_912054-MLA53354557227_012023-O.webp',
    name:'Iphone',
    version:'13 Pro Max',
    price:400000,
    year:2022
},
{
    id:"2",
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_873385-MLM51559384419_092022-F.webp',
    name:'Iphone',
    version:'14 Pro Max',
    price:500000,
    year:2023 
},
{
    id:"3",
    image:'https://http2.mlstatic.com/D_NQ_NP_679726-MLA53452158591_012023-O.webp',
    name:'Samsung',
    version:'Galaxy S23 ',
    price:450000,
    year:2021 
},
{
    id:"4",
    image:'https://http2.mlstatic.com/D_NQ_NP_681526-MLA53162776022_012023-O.webp',
    name:'Motorola',
    version:'Moto G200 ',
    price:300000,
    year:2023
}
]

const addToCart = (producto)=> setCarrito([...carrito, producto])
    
  return (
    <EcommerContext.Provider value={{
        products,
        addToCart,
        carrito
    }}>
        {children}
    </EcommerContext.Provider>
  )
}

export default EcommerceProvider