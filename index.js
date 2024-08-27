const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/miproyecto", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("conectado");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
const rutasUsuarios = require("./rutas/usuarios");
app.use("/api/usuarios", rutasUsuarios);

//

function controladorinicio(req, res) {
  res.send("hola");
}
app.get("/", controladorinicio);
app.listen(3000, () => console.log("escuchando"));
{
}
app.get("/usuario/id:", function (req, res) {
  const id = req.params.id;
  res.send("el id es " + id);
});
