import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


let firstRender = true

function FileUpload({files , onSubmit}) {  

  //functions 
  const addFile = async (e) => {
      console.log('inside addFile function')
      const file = await e.target.files[0];
      const secondFile = await e.target.files[0];
      await onSubmit(file)
      e.target.value = null;
  }


  // Hooks
  useEffect(() => {
    if(firstRender){
      console.log('first render')
      firstRender = false
    }else{
      console.log('not first render')

    }
  })

  
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-24 shadow-lg shadow-gray-400 flex flex-row justify-around rounded-lg opacity-100 animated__animate animate__bounceIn'>
        <div className='container w-20 h-20 border-dotted border-gray-400 bg-white border-4 rounded-3xl flex justify-center self-center'>
        <button id = "upload-file-button" className='self-center'></button>
        </div>

        <div className='container flex justify-center w-1/2'>
        <input type="file" className='self-center' onChange = {(e) => addFile(e)} />
        </div>

    </div>
  )
}

export default FileUpload
