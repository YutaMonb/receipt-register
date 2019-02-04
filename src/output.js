"use strict";

const mongoose = require("mongoose");
const fs = require("fs");
mongoose.connect("mongodb://localhost/tax", { useNewUrlParser: true });

let connection = mongoose.connection;

connection.once("open", function() {
  connection.db.collection("receipts", (err, collection) => {
    collection.find({}).toArray((err, data) => {
      data.forEach(obj => {
        delete obj._id;
        delete obj.__v
      });
      fs.writeFileSync("./data/output.json", JSON.stringify(data));
      console.log("finish.");
      process.exit(0);
    });
  });
});
