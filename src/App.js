import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from './redux/reducer/Index';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';

function App() {
  const store = createStore (reducers ,applyMiddleware(thunk))
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Product/>}/>
    <Route exact path ="/cart" element ={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
