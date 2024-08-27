const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const publicacionSchema = new Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "usuario" },
  titulo: String,
  texto: String,
  // likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "usuario" }],
});

module.exports = mongoose.model("publicacion", publicacion);
