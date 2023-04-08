
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import EcommerceProvider from './context/EcommerceProvider';
import Rutas from './routes/Index';


function App() {
  return (
    <div className="App">
      <EcommerceProvider>
        <Rutas/>
      </EcommerceProvider>
    </div>
  );
}

export default App;
