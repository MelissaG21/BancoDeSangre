const express = require('express');
const Unidad = require('../models/unidad');
const path = require('path');

//RESFULL = GET, POST, PUT, PACH Y DELETE
//Modelo = Una estructura de datos que representa una entidad real

function pagina(req, res, next) {
  res.sendFile(path.resolve(__dirname,'../views/registroU.html'));
}

function index(req, res, next){
  const id = req.params.id;
  Unidad.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Unidad almacenado con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información de la unidad con ID ${id}`,
    obj: ex
  }));
}

function create(req, res, next){
    const nombreHospital= req.body.nombreHospital;
    const tipoSangre= req.body.tipoSangre;
    const cantidad = req.body.cantidad;

    let unidad = new Unidad({
      nombreHospital: nombreHospital,
      tipoSangre: tipoSangre,
      cantidad: cantidad
    });

    let band = false;
    unidad.save().then(band=true).catch(ex => res.status(500).json({
      message: 'No se pudo almacenar la unidad.',
      obj: ex
    }));
    if(band){
      res.sendFile(path.resolve(__dirname,'../views/unidadesAgendadasExito.html'));
    }
}

function replace(req, res, next){
  const id = req.params.id;
  let nombreHospital= req.body.nombreHospital;
  let tipoSangre= req.body.tipoSangre;
  let cantidad = req.body.cantidad;

  let unidad = new Object({
    _nombreHospital: nombreHospital,
    _tipoSangre: tipoSangre,
    _cantidad: cantidad
  });

  Unidad.findOneAndUpdate({"_id":id}, unidad).then(obj => res.status(200).json({
    message:"Unidad reemplazada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar la unidad',
    obj: ex
  }));
}

function edit(req, res, next){
  const id = req.params.id;
  let nombreHospital= req.body.nombreHospital ? req.body.nombreHospital: "";
  let tipoSangre= req.body.tipoSangre ? req.body.tipoSangre: "";
  let cantidad = req.body.cantidad ? req.body.cantidad: "";

  let unidad = new Object();

  if(nombreHospital){
    unidad._nombreHospital = nombreHospital;
  }

  if(tipoSangre){
    actor._tipoSangre = tipoSangre;
  }

  if(cantidad){
    actor._cantidad = cantidad;
  }

  Unidad.findOneAndUpdate({"_id":id}, unidad).then(obj => res.status(200).json({
    message:"Unidad actualizada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar la unidad',
    obj: ex
  }));
}

function destroy(req, res, next){
  const id = req.params.id;
  Unidad.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Unidad eliminada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar la unidad',
    obj: ex
  }));
}

module.exports = {
    pagina, index, create, replace, edit, destroy
}
