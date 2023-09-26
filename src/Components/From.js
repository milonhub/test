import React, { useState } from 'react';
import "../index.css";
export default function From() {
    
    const [user, setUser] = useState({name: "", email: '', password: '' });
    const {name, email, password} = user;

    const handlerChange = (e) =>{
      const fieldname  = e.target.name;
      if( fieldname === "name"){
        setUser({name: e.target.value, email, password});      
      }

      else if( fieldname === "email"){
        setUser({name, email: e.target.value, password});      
      }
      else if( fieldname === "password"){
        setUser({name, email, password: e.target.value});      
      }
    }


      // if()
      //      setUser({...user, [e.target.name]:e.target.value});
        
    

//     const handleemailchange = (e) =>{
//       setUser({name, email: e.target.value, password});
//  }

//  const handlepasswordchange = (e) =>{
//   setUser({name, email, password: e.target.value});
//  }

const handlesubmit = (e) =>{
    console.log("From is Submited");
    console.log(user);
    e.preventDefault();
}
  return (
    <div>
      
        <h1>Registration:</h1>
        <form action="" method="" onSubmit={handlesubmit}>
        <div className='formdiv'> 
        <label>Name:</label>
        <input type='text' name="name" id="name" onChange={handlerChange} value={name}></input>
        </div>

        <div className='formdiv'> 
        <label>Gmail:</label>
        <input type='email' name="email" id="email" onChange={handlerChange} value={email}></input>
        </div>
       
        <div className='formdiv'> 
        <label>Password:</label>
        <input type='password' name="password" id="password" onChange={handlerChange} value={password}></input>
        </div>
        <div className='formdiv'>
            <button type='submit'>Rgisters</button>
        </div>
      </form>
    </div>
  )
}
