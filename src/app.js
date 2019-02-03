"use stirct";

const fs = require("fs");
const opener = require("opener");

/**
 *
 * @param {string} path
 */
const getDirFiles = async path =>
  new Promise(resolve => {
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
      resolve(imageList);
    });
  });

async function main() {
  const files = await getDirFiles(process.argv[2]);

  files.forEach(file => {
    opener(process.argv[2] + "/" + file);
  });
}

main();
