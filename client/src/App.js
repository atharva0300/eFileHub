import './App.css';
import 'react-lorem-ipsum';
import 'animate.css';

function App() {
  return (
    <div className="App bg-gray-400">
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

      <div className="flex flex-row justify-around">
          <div className='self-center w-2/5 animate__animated animate__slideInUp'>
            <h3 className='text-xl font-sans text-black'>Share files using <span className='text-3xl font-mono text-fuchsia-600'>eFileHub.</span></h3>
            <p className='text-md text-white flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque magni provident deleniti! Odio nostrum molestiae beatae ipsum, suscipit aliquam doloribus eum, soluta quis iure rerum et blanditiis autem, accusamus eligendi?</p>
          </div>

          <div className='self-center w-2/5 animate__animated animate__slideInUp'>
            <img src = {require('./img/docs.png')} alt = "docs image" />
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
            <img src = {require('./img/file.png')} alt = "files image" />
          </div>
      </div>

      <div className='container h-screen max-w-full flex flex-col justify-around bg-cyan-400'>
          <div className='card self-center bg-fuchsia-600 w-1/4 h-24 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 animated__animate animate__bounceIn'>
              <div className='container w-20 h-20 border-dotted border-gray-400 bg-white border-4 rounded-3xl flex justify-center self-center'>
                <button id = "upload-file-button" className='self-center'></button>
              </div>
              <div className='container flex justify-center w-1/2'>
               <input type="file" placeholder='Upload a file...' className='self-center'/>
              </div>
          </div>

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

          <div className='card self-center bg-fuchsia-600 w-1/4 h-40 shadow-lg shadow-gray-400 flex justify-around rounded-lg opacity-100 flex-col animated__animate animate__bounceIn'>
              <div className='flex flex-row justify-around'>
                <div className='self-center flex flex-col justify-around w-32 h-16 bg-orange-400 group hover:ring-white active:translate-y-1 active:bg-white active:ring-white rounded-lg hover:shadow-gray-400 hover:ring-2 active:ring-2 active:shadow-lg'>
                  <button id = "create-link-button" className='self-center'></button>
                  <label className='self-center text-semibold font-mono text-white group-active:text-black'>Create Link</label>
                </div>

                <div className='self-center flex flex-col justify-around w-32 h-16 bg-orange-400 group hover:ring-white active:translate-y-1 active:bg-white active:ring-white rounded-lg hover:shadow-gray-400 hover:ring-2 active:ring-2 active:shadow-lg'>
                  <button id = "convert-to-zip" className='self-center'></button>
                  <label className='self-center text-semibold font-mono text-white group-active:text-black'>Zip it</label>
                </div>
              </div>

              <div className='self-center container flex flex-row'>
                <div className='w-4 h-4 self-center mb-4 ml-6'>
                  <button id = "copy-link-button" className='bg-gray-400 hover:ring-2 hover:ring-white rounded-md active:bg-white active:ring-2 active:ring-gray-400'></button>
                </div>
                  <input type = "url" placeholder='Copy this url and paste it on new tab...' className='text-lg italic w-96 ml-6' />
              </div>

          </div>


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
          
      </div>
    </div>
  );
}

export default App;
