import React from 'react';
import Dash from './Dashboard.css';
export default function Dashboard() {
    return (
        <div className="dashboard">
  
         
        
            
            
            
            <div className="search"> 
            <div>
            <label>Name</label>
             <input name="Search Name"/><br/>
            </div>
            <div>
            <label>Last Name</label>
            <input name="Search Last Name"/>
            </div>
         <div>
         <label>Email</label>
         <input name="Search Email"/>
         </div>
            
         <div>
         <label>Phone</label>
         <input name="Phone"/>
         </div>
         <div>
         <label>Faculty</label>
         <select name="faculty"/>
     
         </div>
            <div>
            <label>Group</label>
         <select name="group"/>
         
            </div>
         </div>
        
    
      
        
        </div>
    )
}
