'use strict';

const fs = require('fs');

fs.readFile('./data/output.json', (err, data) => {
  const json = JSON.parse(data);
  let total = 0;
  json.forEach(element => {
    total += element.price;
  });
  console.log(total);
});
