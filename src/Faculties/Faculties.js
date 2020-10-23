import React,{ useState }  from 'react';
import Fac from './Faculties.css'
export default function Faculties() {
    const [toggle, setToggle] = useState(true);
  
   
    return (
       <>
       {toggle ?  <div className="container">
            
            <div>
                
                <button className="btn" onClick={()=>{setToggle(!toggle)}}>Create Faculty</button>
                <hr/>
            </div>
            <div className="nameId">
            <h1>Id</h1>
            <h1 className="name">Name</h1>
            </div>
        </div> : <div className="modalcontainer">
            <h1>Create Faculty</h1>
            
                <label>Faculty</label><br></br>
                <input/>
            
             
               <div className="btncontainer">
            <button className="btnsave" onClick={()=>{setToggle(!toggle)}}>Save</button>
            <button className="btncancel"  onClick={()=>{setToggle(!toggle)}}>Cancel</button>
                   </div> 
          
            </div>
    }
  
</>

        

    )
}
