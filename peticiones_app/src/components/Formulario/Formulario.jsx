import {React,  useContext} from 'react'
import UseForm from '../../hooks/UseForm'
import Input from '../../shared/Input'
import { defineInputType, defineIsDisable } from '../../helper'
import { productContext } from '../../context/ProductProvider'



const Formulario = (props) => {
    const {saveProduct, editProduct} = useContext(productContext)

    const { initialState,buttonText="submit", buttonClassName="btn btn-primary w-100", edit} = props
    const {form,handleChange} = UseForm(initialState)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(edit){
            editProduct(form)
            return;

        }
        saveProduct(form)

    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            {
                Object.entries(form)?.map(([key,value])=>(
                    <Input 
                    type={defineInputType(key)} 
                    key={key}
                    name={key}
                    value={value}
                    disabled={defineIsDisable(key)}
                    onChange={handleChange} />
                ))

            }
            <button type="submit" className={buttonClassName}>
                {buttonText}
            </button>
        </form>
    )
}

export default Formulario