import './App.css';
import { Provider } from 'react-redux';
import  store  from './redux/Store';
import Counter from './components/Counter';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
        <User/>
      </Provider>
    </div>
  );
}

export default App;
