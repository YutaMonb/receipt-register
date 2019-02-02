"use stirct";

const fs = require("fs");

/**
 * 
 * @param {string} path 
 * @param {Array} callback 
 */
const getFiles = (path, callback) => {
  const imageList = [];
  fs.readdir(path, { withFileTypes: true }, (err, dirents) => {
    if (err) {
      console.error(err);
      return;
    }

    dirents.forEach(dirent => {
      if (!dirent.name.match(/(\.jpeg|\.jpg|\.png)/i)) return;
      imageList.push(dirent.name);
    });
    callback(imageList);
  });
};

getFiles(process.argv[2], console.log);
