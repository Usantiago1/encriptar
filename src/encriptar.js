
import React,{useState} from 'react';

import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';

import swal from 'sweetalert';

const Encriptar = () =>{

  const [mensaje, SetMensaje] = useState([]);
  let [result, SetResult] = useState('');
  const caracter = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","_"];
 

  function alert(pTitle, pText, pIcon, pButton) {
    swal({
      title: pTitle,
      text: pText,
      icon: pIcon,
      button: pButton
    });
  }

 function iniciar() {
   let texto = String(mensaje);
   texto = texto.replace(/\s/gi, "0");
    if (texto.length <= 0) {
          alert('Error','No fue Posible Encriptar el Texto','error','ok');
    }else{
          alert('Correcto','Encriptacion correcta','success','ok');
          const result = valores(texto, caracter);
          encriptado(result);
          
        }
}

  function valores(pTexto, pCaracter) {
    const mensaje = pTexto.split("");
    const caracter = pCaracter;
    let index;
    const array = new Array();

    for (let a = 0; a < pTexto.length; a++) {
        index = parseInt(caracter.indexOf(mensaje[a].toLowerCase()));
        array.push(index);        
    }
    while (array.length % 3 != 0) {
      array.push(0);
    }
    return array;

  }

  function encriptado(pMensaje) {
    const mensaje = pMensaje;
    const matriz = [[1,2,1],[0,-1, 3], [2, 1, 0]];
    //let result = null;
    let entrada = 0;
    
    for (let i=0; i < mensaje.length; i++) {
      for (let j = 0; j < matriz.length; j++) {
        entrada = (matriz[0][j] * mensaje[i]) + (matriz[1][j] * mensaje[i + 1]) + (matriz[2][j] * mensaje[i+2]);
        result = result + entrada + '';
      }
      i+=2;
      
    }
    console.log(result);

  }


  return (

    

    <div className='card mt-5'>
        <div className='card-body mb-2'>
            <InputText className='form-control' value={mensaje} onChange={(e)=>SetMensaje(e.target.value)}  placeholder="Ingresar Mensaje"></InputText>
            <InputTextarea className='form-control mt-5' value={result} onChange={(e)=>SetResult(e.target.value)}  ></InputTextarea>   
            <Button className='mt-5' onClick={iniciar}>Encriptar</Button> 
                    
        </div>
      

    </div>
  );
}

export default Encriptar;