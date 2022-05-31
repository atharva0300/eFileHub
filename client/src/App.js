import './App.css';
import 'react-lorem-ipsum';
import 'animate.css';

// importing components 
import Header from './components/Header';
import InfoPage from './components/InfoPage';
import FileUpload from './components/FileUpload';
import DisplayFiles from './components/DisplayFiles';
import Conversion from './components/Conversion';
import ShareDoc from './components/ShareDoc';

// importing hooks etc
import {useState} from 'react';
import axios from 'axios';


function App() {

  const [files , setFiles] = useState([])

  const addToFiles = (selectedFile) => {
     console.log('Inside add files')
     console.log('Selected File : ' , selectedFile)
     const newFilesList = [...files, selectedFile]
     setFiles(newFilesList);

     console.log('Dispalying files : ')
     for(let i=0;i<files.length;i++){
       console.log(files[i].name)
       console.log(files[i])
     }
  }


  const removeFile = (fileName) => {
    console.log('Inside remmoveFile')
    const newFilesList = files.filter((file) => file.name !== fileName)
    setFiles(newFilesList);

    console.log('Dispalying files : ')
     for(let i=0;i<files.length;i++){
       console.log(files[i].name)
     }

  }

  const postRequest = () => {
    console.log('sending the post request')
    files.forEach(async (file) => {
      const formData = new FormData();
      formData.append('file' , file);
      console.log('file : ' , file)
      
      try{
        const res = await axios.post('/upload' , formData, {
          headers : {
            'Content-Type' : 'multipart/form-data'
          }
        })

        console.log(res)

      }catch(err){
        console.log('Error : ' , err.response.data)
      }
    })
  }


  return (
    <div className="App bg-gray-400">
      <Header />

      <InfoPage />

      <div className='container h-screen max-w-full flex flex-col justify-around bg-gray-400'>
        <FileUpload files = {files} onSubmit = {addToFiles} />
        <DisplayFiles files = {files} onSubmit = {removeFile} />
        <Conversion onSubmit = {postRequest} />    
        <ShareDoc />
    </div>

    </div>
  );
}

export default App;
