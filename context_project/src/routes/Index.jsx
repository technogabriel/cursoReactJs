import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ItemDetail from '../pages/ItemDetail'
import EcommerceLayout from './EcommerceLayout'


const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<EcommerceLayout/>}>
                <Route index element={<Home />} />
                <Route path='cart' element={<Cart />} />
                <Route path='item/:id' element={<ItemDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index