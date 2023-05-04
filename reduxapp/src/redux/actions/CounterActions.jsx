import { types } from "../types/Counter.types"


export const counterSum = () => ({
    type : types.SUMAR
})

export const counterRes =() =>({
    type: types.RESTAR
})

export const SumNum =(numero)=>({
    type: types.SUMAR_NUM,
    payload: numero
})

export const counterReset =() =>({
    type: types.RESET
})

export const setTemporal=(number)=>({
    type: types.TEMPORAL,
    payload: number
})
