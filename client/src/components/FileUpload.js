import React from 'react'

function FileUpload() {
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-24 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 animated__animate animate__bounceIn'>
        <div className='container w-20 h-20 border-dotted border-gray-400 bg-white border-4 rounded-3xl flex justify-center self-center'>
        <button id = "upload-file-button" className='self-center'></button>
        </div>
        <div className='container flex justify-center w-1/2'>
        <input type="file" placeholder='Upload a file...' className='self-center'/>
        </div>
    </div>
  )
}

export default FileUpload