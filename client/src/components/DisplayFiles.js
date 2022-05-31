import React from 'react'


function DisplayFiles({files , onSubmit}) {


  // functions
  const removeFile = (e , fileName) => {
    e.preventDefault();
    onSubmit(fileName)
  }

  const displayFiles = files.map((file , index ) => (
    <div className='self-center container flex justify-between text-white text-semibold h-12 flex-row' key = {index} onClick={(e) => removeFile(e , file.name)}>
            <span className='self-center ml-4 w-3/5'>{file.name}</span>
            <span className='self-center ml-4 text-yellow-500'>{file.size} bytes</span>
            <span className='flex justify-center'><button id ="delete-file-button" className='self-center hover:scale-125 active:translate-y-1 mr-4'></button></span>
    </div>
  ))


  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-auto shadow-lg shadow-gray-400 flex justify-around rounded-lg flex-col animated__animate animate__bounceIn'>
          {displayFiles}
    </div>
  )
}

export default DisplayFiles