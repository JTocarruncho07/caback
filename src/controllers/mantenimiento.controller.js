const MantenimientoRouter = require('../routes/matenimiento.router');
const Mantenimiento = require('../models/Mantenimiento');
const catchError = require('../utils/catchError');
const crearMantenimiento = catchError(async (req, res) => {
    try {
      const mantenimiento = await Mantenimiento.create(req.body);
      res.status(201).json(mantenimiento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
const obtenerMantenimientosPorActivo = catchError(async (req, res) => {
    try {
      const activoId = req.body.activoId || req.query.activoId;

      const mantenimientos = await Mantenimiento.findAll({ where: { activoId } });
      
      if (!mantenimientos.length) return res.status(404).json({ error: "No hay mantenimientos para este activo" });
  
      res.json(mantenimientos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
const actualizarMantenimiento = catchError(async (req, res) => {
    try {
      const { id } = req.params;


    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
const eliminarMantenimiento = catchError(async (req, res) => {
    try {
      const { id } = req.params;


    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = {
    crearMantenimiento,
    obtenerMantenimientosPorActivo,
    actualizarMantenimiento,
    eliminarMantenimiento
  };