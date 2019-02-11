'use strict';

const fs = require('fs');

fs.readFile('./data/output.json', (err, data) => {
  const json = JSON.parse(data);
  
  let map = new Map();
  json.forEach(element => {
    if(!map.has(element.type)) {
      map.set(element.type, 0);
    }
    map.set(element.type, map.get(element.type) + element.price);
  });
  console.log(map);
});
