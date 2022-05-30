import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FileActions } from '../features/FileSlice';

function DisplayFiles() {

  const files = useSelector((state) => state.file.fileArray)
  const dispatch = useDispatch();
  

  // functions 
  const removeFile = (event , fileName) => {
    dispatch(FileActions.removeFile({fileName}))
  }


  // mapping function 
  const displayBlock = files.map((file) => (
    <div className='self-center container flex justify-between text-white text-semibold h-12 flex-row'>
          <span className='self-center ml-4 w-3/5'>{file.name}</span>
          <span className='self-center ml-4 text-yellow-500'>{file.size} bytes</span>
          <span className='flex justify-center'><button id ="delete-file-button" className='self-center hover:scale-125 active:translate-y-1 mr-4' onClick={(event) => removeFile(event , file.name)}></button></span>
    </div>
  ))

  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-auto shadow-lg shadow-gray-400 flex justify-around rounded-lg flex-col animated__animate animate__bounceIn'>
          {displayBlock}
    </div>
  )
}

export default DisplayFiles