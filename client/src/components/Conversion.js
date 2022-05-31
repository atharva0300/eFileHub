import React from 'react'

function Conversion({onSubmit}) {


  // functions 
  const postRequest = () => {
    onSubmit();
  }
  
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-40 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 flex-col animated__animate animate__bounceIn'>
              <div className='flex flex-row justify-around'>
                <div onClick = {() =>postRequest() } className='self-center flex flex-col justify-around w-32 h-16 bg-orange-400 group hover:ring-white active:translate-y-1 active:bg-white active:ring-white rounded-lg hover:shadow-gray-400 hover:ring-2 active:ring-2 active:shadow-lg'>
                  <button id = "create-link-button" className='self-center'></button>
                  <label className='self-center text-semibold font-mono text-white group-active:text-black'>Create Link</label>
                </div>

                <div onClick = {() => postRequest()} className='self-center flex flex-col justify-around w-32 h-16 bg-orange-400 group hover:ring-white active:translate-y-1 active:bg-white active:ring-white rounded-lg hover:shadow-gray-400 hover:ring-2 active:ring-2 active:shadow-lg'>
                  <button id = "convert-to-zip" className='self-center'></button>
                  <label className='self-center text-semibold font-mono text-white group-active:text-black'>Zip it</label>
                </div>
              </div>

              <div className='self-center container flex flex-row'>
                <div className='w-4 h-4 self-center mb-4 ml-6' >
                  <button id = "copy-link-button" className='bg-gray-400 hover:ring-2 hover:ring-white rounded-md active:bg-white active:ring-2 active:ring-gray-400'></button>
                </div>
                  <input type = "url" placeholder='Copy this url and paste it on new tab...' className='text-lg italic w-96 ml-6' />
              </div>

          </div>
  )
}

export default Conversion