import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Formulario from './components/Formulario/Formulario';
import Navbar from './components/Navbar/Navbar';
import Productos from './views/Productos';

function App() {

  const [showForms, setShowForm] = useState(false)
 
  return (
    <div className="App text-danger">
      <Navbar nombreItems ={["Home","Link","Disabled"]}/>
     {/* <Productos/>*/}
      {/*<Counter/>*/}

      <button onClick={()=>setShowForm(!showForms)}>{showForms ? 'Ocultar' : 'Mostrar'}</button>
      {showForms &&
      <>
      <Formulario/>
      <Formulario condicional = {true}/>
      </>
    }

    </div>
  );
}

export default App;
