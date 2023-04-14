import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const useCounter = (initialValue=1 ) => {

    const navigate = useNavigate()
    const [count, setCount] = useState(initialValue)

    const handleSum = () => {
        setCount(count + 1)
    }

    const handleRes = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    const handleRedirect =() => navigate('/cart')

  return {
    count,
    handleSum,
    handleRes,
    handleRedirect

  }
}

export default useCounter