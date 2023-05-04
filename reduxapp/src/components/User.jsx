import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const user = useSelector(state => state.User)

    return (
            <div>
                <h1>Nombre : {user.name}</h1>
                <h1>UserName:{user.userName} </h1>
                <h1>Password: {user.password}</h1>
            </div>
    )
}

export default User