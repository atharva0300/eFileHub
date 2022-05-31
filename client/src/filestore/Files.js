let files = []

export const appendFile = async (selectedFile) => {
    files.push(selectedFile)
    console.log('file pushed')

    console.log('displaying files : ')
    for(let i=0;i<files.length;i++){
      console.log(files[i].name);
    }
}

export const removeFile =  (fileName) => {
    const tempArray = files.filter((file) => file.name !== fileName);
    files = tempArray;
    console.log('file removed')
    
    
    console.log('displaying files : ')
    for(let i=0;i<files.length;i++){
      console.log(files[i].name);
    }

    return files

}

export default files