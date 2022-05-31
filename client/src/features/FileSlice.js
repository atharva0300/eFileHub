// creating a reducer slice 
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


// functions

async function postRequest(formData){
    console.log('inside the postRequest function')
    try{
        const res = await axios.post('/upload' , formData , {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })

        console.log('File successfully uploaded')
    }catch(err){
        if(err.response.status === 500){
            console.log('There was a problem with the server')
        }else{
            console.log('Error caught : ' , err)
        }

    }
}


// Slice
export const FileSlice = createSlice({
    name : 'file',
    initialState : {
        reqUpload : false,
        count : 0,
        permissionToUpload : false
    },
    reducers : {
        /*
        uploadFile : (state)=> {
            // uploading the files
            console.log('uploading the file')
            
            const formData = new FormData();
            formData.append(state.file);

            postRequest(formData)

        },
        */

        /*
        addFile : (state , action) => { 
        
            const file = action.payload.selectedFile;
            const fileName = action.payload.selectedFileName;
            
            console.log(file);
            console.log(fileName)
            console.log(file.size)

            state.file = file
            state.fileName=  fileName
            state.fileSize = file.size
            


        },
        */

        /*
        removeFile : (state , action) => {
            // removing file
            const tempArray = state.fileArray.filter((element) => element.name!==action.payload.fileName )
            state.fileArray = tempArray;
            state.count = state.fileArray.length
            console.log('count : ' , state.count)

            console.log('filtered array : ')
            state.fileArray.forEach(element => {
                console.log('file : ' , element.file);
                console.log('file name : ' , element.name);
                console.log('file size : ' , element.size);
            });

        },
        */

        incrementCount : (state) => {
            state.count++;
        },

        decrementCount : (state ,action) => {
            state.count = action.payload.length
        },

        reqFileUpload : (state) => {
            state.reqUpload = true;
            console.log('request to upload file : ' , state.reqUpload)
        },

        zipFile : (state) => {
            console.log('request to zip file')
        },

        shareViaEmail : (state) => {
            console.log('Request to share via email')
        },

        saveToDrive : (state) => {
            console.log('Request to save to drive')
        },

        createLink : (state) => {
            // creating the link here
            if(state.count===1){
                console.log('You can create the file link')
                state.permissionToUpload = true
            }else if(state.count===0){
                console.log('There are no files')
            }else{
                console.log('More than 1 file')
            }

        },
    },

})

export const FileActions = FileSlice.actions

export default FileSlice.reducer