'use stirct';

const fs = require('fs');

const getFiles = (path, callback) => {
  fs.readdir(path, { withFileTypes: true }, (err, dirents) => {
    if (err) {
      console.error(err);
      return;
    }

    dirents.forEach(dirent => {
      if (!dirent.name.match(/(\.jpeg|\.jpg|\.png)/i)) return;
      callback(dirent.name);
    });
  });
};

getFiles(process.argv[2], console.log);
