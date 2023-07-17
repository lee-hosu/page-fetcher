const request = require("request");

// Writing a file
const fs = require("fs");
// Get process.argv array values
const myUrl = process.argv[2];
const localFilePath = process.argv[3];

// Request http connection
request(myUrl, (error, response, body) => {
  fs.writeFile(localFilePath, body, (err) => {
    if (err) {
      console.log(err);
    }
    // get file size using fs.statSync
    let stats = fs.statSync(localFilePath);
    console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
  });
});
