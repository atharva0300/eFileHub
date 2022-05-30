import React from 'react'

function Header() {
  return (
    <div>
        <header className='flex flex-row justify-between bg-orange-400 h-16'>
        <div className='flex justify-center self-center ml-16'>
          <h1 className='text-3xl font-sans text-fuchsia-600 text-bold'>eFileHub.</h1>
          <a href = "#" className='text-xl px-8 mt-1 text-sans text-gray-600 active:text-cyan-400 ml-16 hover:text-black animated__animate animate__bounceIn'>Home</a>
          <a href = "#" className='text-xl px-8 mt-1 text-sans text-gray-600 active:text-cyan-400 hover:text-black animated__animate animate__bounceIn'>About us</a>
          <a href = "#" className='text-xl px-8 mt-1 text-sans text-gray-600 active:text-cyan-400 hover:text-black animated__animate animate__bounceIn'>Contact</a>
        </div>
          <div className='flex justify-center self-center mr-36'>
            <button className='w-32 h-10 bg-fuchsia-600 text-white rounded-2xl font-sans text-lg hover:ring-2 hover:ring-cyan-300 active:text-fuchsia-600 active:bg-white active:ring-2 active:ring-fuchsia-600 animated__animate animate__flipInX'>Get Started</button>
          </div>
      </header>
    </div>
  )
}

export default Header