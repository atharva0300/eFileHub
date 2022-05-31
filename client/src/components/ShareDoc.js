import React from 'react'

function ShareDoc() {
  
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-40 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 flex-col animated__animate animate__bounceIn'>
              <label className='text-xl font-sans text-white'>Share via</label>

              <div className='container flex flex-row justify-around'>
                <div className='self-center flex flex-col justify-evenly w-24 h-24 bg-orange-400 rounded-xl hover:ring-2 hover:ring-white active:ring-2 active:ring-white active:translate-y-1'>
                  <button id = "share-email-button" className='self-center'></button>
                  <label className='self-center text-white'>Email</label>
                </div>
                
                <div className='self-center flex flex-col justify-evenly w-24 h-24 bg-orange-400 rounded-xl hover:ring-2 hover:ring-white active:ring-2 active:ring-white active:translate-y-1'>
                  <button id = "share-drive-button" className='self-center'></button>
                  <label className='self-center text-white'>Save <br/>to drive</label>
                </div>

              </div>
          </div>
  )
}

export default ShareDoc