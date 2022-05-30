import React from 'react'

function InfoPage() {
  return (
      <div>
    <div className="flex flex-row justify-around">
          <div className='self-center w-2/5 animate__animated animate__slideInUp'>
            <h3 className='text-xl font-sans text-black'>Share files using <span className='text-3xl font-mono text-fuchsia-600'>eFileHub.</span></h3>
            <p className='text-md text-white flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque magni provident deleniti! Odio nostrum molestiae beatae ipsum, suscipit aliquam doloribus eum, soluta quis iure rerum et blanditiis autem, accusamus eligendi?</p>
          </div>

          <div className='self-center w-2/5 animate__animated animate__slideInUp'>
            <img src = {require('../img/docs.png')} alt = "docs image" />
          </div>
      </div>


      <div className='flex flex-row-reverse justify-around'>
          <div className='self-center w-2/5 animated__animate animate__bounceIn'>
            <h3 className='text-3xl font-mono text-fuchsia-600'>Why use eFileHub ?</h3>
            <p className='text-md text-white flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque magni provident deleniti! Odio nostrum molestiae beatae ipsum, suscipit aliquam doloribus eum, soluta quis iure rerum et blanditiis autem, accusamus eligendi?</p>
            <ul className='text-md text-white flex-wrap mt-2'>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div className='self-center w-2/5 animated__animate animate__bounceIn'>
            <img src = {require('../img/file.png')} alt = "files image" />
          </div>
      </div>
      </div>
  )
}

export default InfoPage