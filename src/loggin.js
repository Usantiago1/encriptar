import React,{useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { Navigate } from "react-router-dom";
import {InputTextarea} from 'primereact/inputtextarea';


const Loggin = () =>{
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  

  return (
    <>
       
    <div className='card mt-5'>
      <div className="card-body mb-2">
      <InputText value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'></InputText>
      <InputText value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control mt-5' placeholder='Password'></InputText>
      
     <Button className='mt-5'>Ingresar</Button>        
      </div>

    </div>
    </>
 
  );
}

export default Loggin;



