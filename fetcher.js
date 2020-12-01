const fs = require('fs');
const request = require('request');

const myArgs = process.argv.slice(2);

  request (myArgs[0], (error, response, body) => {
    fs.writeFile(myArgs[1],  body, (err) => {
      const downloadedFile = fs.statSync(myArgs[1]);
      const fileSize = downloadedFile["size"];
      console.log('Downloaded and saved ',fileSize, ' bytes to ', myArgs[1]);
  
      });
  });
  


