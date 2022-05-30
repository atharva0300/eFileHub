import React from 'react'

function DisplayFiles() {
  return (
    <div className='card self-center bg-fuchsia-600 w-1/4 h-auto shadow-lg shadow-gray-400 flex justify-around rounded-lg flex-col animated__animate animate__bounceIn'>
              <div className='self-center container flex justify-around text-white text-semibold h-12 flex-row'>
                <span className='self-center'>1. file name</span>
                <span className='self-center'>time</span>
                <span className='self-center'>size</span>
                <span className='flex justify-center'><button id ="delete-file-button" className='self-center hover:scale-125 active:translate-y-1'></button></span>
              </div>

              <div className='self-center container flex justify-around text-white text-semibold h-12 flex-row'>
                <span className='self-center'>1. file name</span>
                <span className='self-center'>time</span>
                <span className='self-center'>size</span>
                <span className='flex justify-center'><button id ="delete-file-button" className='self-center hover:scale-125 active:translate-y-1'></button></span>
              </div>

              <div className='self-center container flex justify-around text-white text-semibold h-12 flex-row'>
                <span className='self-center'>1. file name</span>
                <span className='self-center'>time</span>
                <span className='self-center'>size</span>
                <span className='flex justify-center'><button id ="delete-file-button" className='self-center hover:scale-125 active:translate-y-1'></button></span>
              </div>
          </div>
  )
}

export default DisplayFiles