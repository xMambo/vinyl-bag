const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  tracks: String,
  date: { type: Date, default: Date.now },
  image: String
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
