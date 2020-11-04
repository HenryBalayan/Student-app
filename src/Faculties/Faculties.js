import React,{ useState }  from 'react';

import Fac from './Faculties.css'
export default function Faculties() {
    const [toggle, setToggle] = useState(true);
  
  
let value=null;
let arr=[];
  const onInputHandler=(e)=>{
      value=e.target.value;
    console.log(value)
}
const onClickHandler=()=>{
    
    arr.push(value)
    setToggle(!toggle)
    console.log(arr)
    }
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
          <ul>
          {arr.map((el)=><li>{el+10}</li>)}
        </ul>  
        </div> : <div className="modalcontainer">
            <h1>Create Faculty</h1>
            
                <label>Faculty</label><br></br>
                <input  onChange={onInputHandler}/>
            
             
               <div className="btncontainer">
            <button className="btnsave" onClick={onClickHandler}>Save</button>
            <button className="btncancel"  onClick={()=>{setToggle(!toggle)}}>Cancel</button>
                   </div> 
          
            </div>
    }
  
</>

        

    )
}
