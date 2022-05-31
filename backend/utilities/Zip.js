const file_system = require('fs');
const archiver = require('archiver');

function zipArchive(){
    console.log('Inside the zipArchive function')
    const output = file_system.createWriteStream('../zips/target.zip');
    const archive = archiver('zip');

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function(err){
        throw err;
    });

    archive.pipe(output);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory('../store', false);

    // append files from a sub-directory and naming it `new-subdir` within the archive
    archive.directory('subdir/', 'new-subdir');

    archive.finalize();

    /*
    // delete directory recursively
    file_system.rmdir('../store', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }

        console.log(`store is deleted!`);
    });
    */
}


module.exports = {
    zipArchive
}
