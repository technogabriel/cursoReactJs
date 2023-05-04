import { types } from "../types/User.types"

const initialState = {
    name:"Adan",
    userName:"technogabriel",
    password:"123Techno"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE:
        return{
            ...state,
            name:"gabriel"
        }

  default:
    return state
  }
}
