import React from 'react';
import Nav from './Navbar.css';
import {Link} from 'react-router-dom';
import Faculties from '../Faculties/Faculties';
export default function Navbar() {
    return (
        <div className="Navbar">

            
<Link to="/Dashboard"> <button>Dashboard </button></Link> 
<Link to="/Faculties"> <button>Faculties  </button></Link>
            
            <button>Groups</button>
            <button>Students</button>
        </div>
    )
}

