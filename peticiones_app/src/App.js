import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //'https://jsonplaceholder.typicode.com/posts/'

  useEffect(() => {
    
    const getAllPost = () =>{
      //Sincronico:
      fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error)=> console.log(error))

    }

    const getPostAxios = async (id) =>{
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res);
      } catch (error) {
        console.log(error);
        
      }

    }

    getAllPost()
    getPostAxios(1)
  }, []);

  

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
