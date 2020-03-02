const fs = require("fs");
const CreateLogFile = (fileName, extesntion, data) => {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(`${fileName}.${extesntion}`)) {
      fs.writeFile(`${fileName}.${extesntion}`, `${data}`, err => {
        err ? reject(err) : resolve("File has been created.");
        return;
      });
    } else {
      reject("file already exists");
    }
  });
};

CreateLogFile("./logs", "env", "log it")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
