import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { FileActions } from '../features/FileSlice';


// importing the function
let firstRender = true

function FileUpload() {
  const fileisUploaded = useSelector((state) => state.file.isUploaded)
  const [selectedFile , setSelectedFile] = useState('');
  const file = useSelector((state) => state.file.file);
  const reqFile = useSelector((state) => state.file.reqFile)
  const [selectedFileName , setSelectedFileName] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    if(firstRender){
      console.log('first render')
      firstRender = false;
    }else{
      dispatch(FileActions.addFile({selectedFile , selectedFileName}))
    }
  } , [selectedFileName])



  // functions 
  const onFileChange = (e) => {
      setSelectedFile({
        selectedFile : e.target.files[0]
      })

      setSelectedFileName({
        selectedFileName : e.target.files[0].name
      })


      
      
  }
  
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-24 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 animated__animate animate__bounceIn'>
        <div className='container w-20 h-20 border-dotted border-gray-400 bg-white border-4 rounded-3xl flex justify-center self-center'>
        <button id = "upload-file-button" className='self-center'></button>
        </div>
        <div className='container flex justify-center w-1/2'>
        <input type="file" placeholder='Upload a file...' className='self-center' onChange={(event) => onFileChange(event)}/>
        </div>
    </div>
  )
}

export default FileUpload
