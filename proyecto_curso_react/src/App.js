import { useState,useEffect } from 'react';
import './App.css';
import { datosLogin, datosLoginInput, datosRegistro, datosRegistroInput } from './components/Formulario/config';
import Formulario from './components/Formulario/Formulario';
import Navbar from './components/Navbar/Navbar';
//import Productos from './views/Productos';

function App() {

  const [showForms, setShowForm] = useState(false)

  const [showLogin,setShowLogin]= useState(false)

  

  const handleSubmit=(e, data)=>{
    e.preventDefault();
    console.log(data)
  }

 
  //Uplifting:
  const[enviado,setEnviado]= useState(false);
  const toggleEnviado=()=> setEnviado(!enviado)

  const [text, setText] = useState('')
  const handleSetText  = (text) => setText(text)


  useEffect(() => {
    if(enviado){
      alert('Se enviaron los datos correctamente!')
      setEnviado(false)
    }
  }, [enviado]);


  
  return (
    <div className="App text-danger">
      <h1>{text || 'Aca va un texto que sera tipiado desde Form'}</h1>
      <Navbar nombreItems ={["Home","Link","Disabled"]}/>
     {/* <Productos/>*/}

      <button onClick={()=>setShowForm(!showForms)}>{showForms ? 'Ocultar' : 'Mostrar'}</button>

      <Formulario 
        onSubmit={handleSubmit} 
        formTitle={!showLogin? 'Register' : 'Login'} 
        initialState={!showLogin ? datosRegistro : datosLogin} 
        inputs = {!showLogin ? datosRegistroInput : datosLoginInput}
        toggleEnviado={toggleEnviado}
        handleSetText={handleSetText}
        />
      {/*<Formulario initialState={datosRegistro}/>*/}
      {/*showForms &&
      <>
      <Formulario/>
      <Formulario condicional = {true}/>
      </>
  */}

  <button onClick={()=>setShowLogin(!showLogin)}>
    {!showLogin? 'Ir a login' : 'Ir a registro'}
  </button>

    </div>
  );
}

export default App;
