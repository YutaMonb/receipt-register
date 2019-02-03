"use stirct";

const fs = require("fs");
const opener = require("opener");
const prompts = require("prompts");
const Receipt = require("./db");

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
  const files = await getDirFiles("./data/backlog");
  const type = [
    "租税公課",
    "荷造運賃",
    "水道光熱費",
    "旅費交通費",
    "通信費",
    "広告宣伝費",
    "接待交際費",
    "損害保険料",
    "修繕費",
    "消耗品費",
    "減価償却費",
    "福利厚生費",
    "給料賃金",
    "外注工賃",
    "利子割引料",
    "地代家賃",
    "貸倒金",
    "雑費",
    "会議費"
  ];

  for (const file of files) {
    opener(`./data/backlog/${file}`);
    console.log(type);

    let confirm = false;

    while (!confirm) {
      var result = await prompts([
        {
          type: "number",
          name: "price",
          message: "料金"
        },
        {
          type: "text",
          name: "type",
          message: "科目"
        },
        {
          type: "confirm",
          name: "confirmed",
          message: "Can you confirm?"
        }
      ]);
      if (result.confirmed) confirm = true;
      console.log(result);
    }

    const receipt = new Receipt();

    receipt.imageid = file;
    receipt.price = result.price;
    receipt.type = result.type;
    receipt.save(err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("success");
    });
    fs.rename(`./data/backlog/${file}`, `./data/done/${file}`, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
}

main();
