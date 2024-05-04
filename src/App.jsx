// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service.jsx';
import NotFound from './components/NotFound.jsx';
import './components/css/App.css'
import logo from './components/assets/img/logo.png'
const App = () => {
    return (
      <BrowserRouter className="app">
         <div className='logoo'>
         <img className='logo'  src= {logo} alt="" /> 
         </div>
          <div>
             <div className='nav'>
            <nav className='navbarr'>
             <ul>
               <li><Link to="/" className='link'>Home</Link></li>
               <li><Link to="/Service" className='link'>Services</Link></li>
             </ul>
            </nav>
            </div>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/Service" element={<Service/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
           </div>
      </BrowserRouter>
    );
    };
    export default App;