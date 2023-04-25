import {React,  useContext} from 'react'
import UseForm from '../../hooks/UseForm'
import Input from '../../shared/Input'
import { defineInputType } from '../../helper'
import { productContext } from '../../context/ProductProvider'



const Formulario = (props) => {
    const {saveProduct} = useContext(productContext)

    const initial= {
            nombre:'',
            marca:'',
            modelo:'',
            precio:''
        }
    

    const { initialState,buttonText="submit", buttonClassName="btn btn-primary w-100", formSubmitFn } = props
    const {form,handleChange} = UseForm(initial)

    const handleSubmit=(e)=>{
        e.preventDefault()
        saveProduct(form)

    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            {
                Object.entries(form).map(([key,value])=>(
                    <Input type={defineInputType(key)} 
                    key={key}
                    name={key}
                    value={value}
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