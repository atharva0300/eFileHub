// imorting the modules 
const express = require('express');
const fileUpload = require('express-fileupload')
const writeFile  = require('fs')
const writeFileSync = require('fs');
const fs = require('fs');
const cors = require('cors');
const { zipArchive } = require('./utilities/Zip');

const app = express();
app.use(fileUpload());
app.use(cors())

console.log(__dirname)

let count=0;
function checkFilePath(path){
    if(fs.existsSync(path)){
        zipArchive();
    }else{
        console.log('The file has not been moved yet')
    }
}


// sync function
function storeZip(file , fileName){
    file.mv(`${__dirname}/store/${fileName}` , (err)  => {
        console.log('storing file')
        const path = `${__dirname}/store/${fileName}`;

        checkFilePath(path)
        if(err){
            console.error(err)
            return res.status(500).send(err);
            // send the status 500 with the response
        }
    })

}

// upload the endpoint 
app.post('/upload' ,  (req , res) => {
    console.log('inside endpoint')
    count++;
    const file = req.files.file

    const filePath = `${__dirname}/store`;

    if(fs.existsSync(filePath)){
        console.log('path exists')
        storeZip(file , file.name)

        /*
        file.mv(`${__dirname}/store/${file.name}` , err => {
            console.log('storing file')
            if(err){
                console.error(err)
                return res.status(500).send(err);
                // send the status 500 with the response
            }
        }, (err) => {
            console.log(err)
        })
        */
        return res.json({'message' : 'Success'})


    }else{
        /*
        return writeFileSync.mkdir(`${__dirname}/store` , err => {
            if(err){
                console.log('mkdir Error : ' , err)
            }
        }, moveFile(file.name))
        */
        console.log('creating a directory')
        writeFile.mkdir(`${__dirname}/store` , err => {
            if(err){
                console.log('mkdir Error : ' , err)
            }
        })
        
        console.log('storing file')

        const filePath = `${__dirname}/store`;
        file.mv(`${__dirname}/store/${file.name}` , err => {
            if(err){
                console.error(err)
                return res.status(500).send(err);
                // send the status 500 with the response
            }
        }, (err) => {
            console.log(err)
        })


        
        return res.json({'message' : 'Success'})
    }
})



        

const PORT = process.env.PORT || 5000

app.listen(PORT  , () => {
    console.log('Server listening on port number : ' , PORT);

})