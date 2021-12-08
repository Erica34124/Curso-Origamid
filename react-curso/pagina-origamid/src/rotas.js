import React from 'react';
import Home from './paginas/Home';
import Repositorio from './paginas/Repositorio';
import users from './paginas/users';
import {BrowserRouter, Router, Route, NavLink} from 'react-router-dom';
import {Switch}from 'react-router-dom';
export default function App() {
  return (
  <>  <h1>App</h1>
 
     <BrowserRouter> 
      
         <nav>
            <NavLink to="/Home" end>Home</NavLink> /
            
            <NavLink to="/users" >Usuários </NavLink> /
             
            <NavLink to="/Repositorio" >Repositorio</NavLink>
         </nav>  
     
     </BrowserRouter> 
   </>    
    )
  };
b