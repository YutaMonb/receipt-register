"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tax", { useNewUrlParser: true });

const Schema = mongoose.Schema;

const Receipt = new Schema({
  imageid: { type: String, require: true }, // 画像ファイル名
  price: { type: Number, required: true }, //料金
  type: { type: String, required: true } //科目
});

module.exports = mongoose.model("receipt", Receipt);
