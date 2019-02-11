'use strict';

const fs = require('fs');

fs.readFile('./data/output.json', (err, data) => {
  const json = JSON.parse(data);
  let total = 0;
  let map = new Map();
  json.forEach(element => {
    if(!map.has(element.type)) {
      map.set(element.type, 0);
    }
    map.set(element.type, map.get(element.type) + element.price);
  total += element.price;
  });
  console.log(map);
  console.log(total);
});
