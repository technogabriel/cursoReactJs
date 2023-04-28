let state = {
    usuarios: {
        userName: null,
        token: null,
        email: null
    },
    productos: {},
    favoritos: []
}

//types
const types = {
    user: {
        LOGIN_SUCCESS: "LOGIN_SUCCESS",
        LOGIN_FAILED: "LOGIN_FAILED"
    },
    productos: {},
    favoritos: {}
}

const initialState = state.usuarios;
const { LOGIN_SUCCESS, LOGIN_FAILED } = types.user

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                usuarios: payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                usuarios: {
                    userName: null,
                    token: null,
                    email: null
                }
            }


        default:
            return state;
    }
}

const handleLoginSuccess = () => ({
    type: types.user.LOGIN_SUCCESS,
    payload: data
})

const handleLoginFailed = () => ({
    type: types.user.LOGIN_FAILED
})

//dispatcher:
//useDispatch from 'react-redux'
//const dispatch = useDispatch()

//selector:
//useSelector from 'react-redux'
//const selector = useSelector()
//const usuario = useSelector(state => state.usuarios)

const handleLogin = (data) =>{
    //data = email y password en un {}
    try {
        //const result =//axios.post("http://ruta", data)
        dispatch(handleLoginSuccess(result.data))
        //handleLoginSuccess(result.data)

    } catch (error) {
        console.log(error)
        //handleLoginFailed()
        
    }
}