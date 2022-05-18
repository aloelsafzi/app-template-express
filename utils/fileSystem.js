const fs = require('fs')

function moveFile(file, somePlace) {
    return new Promise((resolve, reject)=>{
     file.mv(somePlace, function(err) {
       if (err) return reject(err);
  
       resolve();
     });
    });
  }

function deleteFile(pathFile) {
    fs.unlinkSync(pathFile);
}

module.exports = {
    moveFile,
    deleteFile
}