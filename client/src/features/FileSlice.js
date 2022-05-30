// creating a reducer slice 
import {createSlice} from '@reduxjs/toolkit';

export const FileSlice = createSlice({
    name : 'file',
    initialState : {
        files : new Array(),
        reqUpload : false,
        fileNames : new Array(),
        fileSizes : [],
        count : 0,
        fileArray : []
    },
    reducers : {
        uploadFile : (state) => {
            state.file = 1;
            // the file goes here in place of 1
            state.isUploaded = true; 
        },

        addFile : (state , action) => { 
        
            const file = action.payload.selectedFile.selectedFile;
            const fileName = action.payload.selectedFileName.selectedFileName;
            console.log(file);
            console.log(fileName)
            console.log(file.size)
            state.fileNames.push(fileName)
            state.count++
            
            console.log('Displaying array : ')
            for(let i=0;i<state.count;i++){
                console.log('File name : ' , state.fileNames[i])
            }

            const temp = {
                name : fileName,
                size : file.size
            }
            state.fileArray.push(temp);

        },

        removeFile : (state , action) => {
            // removing file
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
        }

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const FileActions = FileSlice.actions

export default FileSlice.reducer