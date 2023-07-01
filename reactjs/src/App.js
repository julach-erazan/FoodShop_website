//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import SignUpPage from 'D:/project/FoodShop_website/reactjs/src/Pages/SignUpPage.js';
import RegisterForm from 'D:/project/FoodShop_website/reactjs/src/Pages/RegisterForm.js';
import Navbar from './Componant/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
          <Routes>         
              <Route expect path='/' element={<Home/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/signuppage' element={<SignUpPage/>}/>
              <Route path='/register' element={<RegisterForm/>}/>
          </Routes>
    </div>
  );
}

export default App;
