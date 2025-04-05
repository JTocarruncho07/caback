const express = require('express');
const {getAll, getOne, remove, update, registrar, login} = require('../controllers/usuario.controller');
const authMiddleware = require('../middleware/authMiddleware');

const UsuarioRouter = express.Router();

UsuarioRouter.route('/usuarios')
    .get(authMiddleware, getAll)
    .post(authMiddleware, registrar)

UsuarioRouter.route('/usuarios/login')
   .post(authMiddleware,login)

UsuarioRouter.route('/usuarios/:id')
   .get(authMiddleware, getOne)
   .delete(authMiddleware, remove)
   .put(authMiddleware, update)

module.exports = UsuarioRouter;