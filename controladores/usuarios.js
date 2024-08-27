const Usuario = require("../modelos/usuario");
const crearUsuario = async (req, res) => {
  const { nomrbre, email, password } = req.body;
  const usuario = new Usuario({ nomrbre, email, password });
  await usuario.save();
  res.json({ usuario, mensaje: "Usuario creado" });
};
const verUsuario = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};
module.exports = { crearUsuario, verUsuario };
