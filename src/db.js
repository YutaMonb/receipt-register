"use strict";

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tax", { useNewUrlParser: true });

let Schema = mongoose.Schema;

let Receipt = new Schema({
  imageid: { type: String, require: true }, // 画像ファイル名
  date: { type: Number, required: true }, // レシートに記載されている時間
  price: { type: Number, required: true }, //料金
  type: {
    type: String,
    enum: [
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
      "雑費"
    ]
  }
});

module.exports = mongoose.model("receipt", Receipt);
