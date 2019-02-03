"use stirct";

const fs = require("fs");
const opener = require("opener");
const prompts = require("prompts");

/**
 *
 * @param {string} path
 */
const getDirFiles = path =>
  new Promise(resolve => {
    const imageList = [];
    fs.readdir(path, { withFileTypes: true }, (err, dirents) => {
      if (err) {
        console.error(err);
        return;
      }

      dirents.forEach(dirent => {
        if (!dirent.name.match(/(\.jpeg|\.jpg|\.png|.pdf)/i)) return;
        imageList.push(dirent.name);
      });
      resolve(imageList);
    });
  });

async function main() {
  const files = await getDirFiles(process.argv[2]);

  for (const file of files) {
    opener(process.argv[2] + "/" + file);
    const price = await prompts({
      type: "number",
      name: "date",
      message: "料金"
    });

    const type = await prompts({
      type: "string"
    })
    
  }
}

main();
