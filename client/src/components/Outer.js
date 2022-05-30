import React from 'react'

// importing components 
import FileUpload from './FileUpload'
import DisplayFiles from './DisplayFiles'
import Conversion from './Conversion'
import ShareDoc from './ShareDoc'


function Outer() {
  return (
    <div className='container h-screen max-w-full flex flex-col justify-around bg-cyan-400'>
        <FileUpload />
        <DisplayFiles />
        <Conversion />    
        <ShareDoc />
    </div>
  )
}

export default Outer