import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Faculties from './Faculties/Faculties';
import {Route} from 'react-router-dom'
//feature 1
function App() {
  return (


   
    <div className="App">
         

         <Route path="/" component={Navbar}></Route>
         
         <Route path="/Dashboard" component={Dashboard}></Route>
         <Route path="/Faculties" component={Faculties}></Route>

       

       
        
        </div>
      
  );
}

export default App;
