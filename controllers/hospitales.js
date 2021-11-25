const express = require('express');
const Hospital = require('../models/hospital');
const path = require('path');

//RESFULL = GET, POST, PUT, PACH Y DELETE
//Modelo = Una estructura de datos que representa una entidad real
function list(req, res, next){
  Hospital.find().then(objs => res.status(200).json({
    message: 'Lista de hospitales del sistema',
    obj:objs
  })).catch(ex => res.status(500).json({
    message: 'No se pudo consultar la información de los hospitales',
    obj: ex
  }));
}

function index(req, res, next){
  const id = req.params.id;
  Hospital.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Hospital almacenado con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información del hospital con ID ${id}`,
    obj: ex
  }));
}

function create(req, res, next){
    const nombre= req.body.nombre;
    const direccion= req.body.direccion;
    const trabajadores = req.body.trabajadores;

    let hospital = new Hospital({
    nombre: nombre,
    direccion: direccion,
    trabajadores: trabajadores
  });

  hospital.save().then(obj => res.status(200).json({
    message: 'Hospital creado correctamente',
    obj: obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo almacenar el hospital.',
    obj: ex
  }));
}

function replace(req, res, next){
  const id = req.params.id;
  let nombre = req.body.nombre ? req.body.nombre: "";
  let direccion = req.body.direccion ? req.body.direccion: "";
  let trabajadores = req.body.trabajadores ? req.body.trabajadores: "";

  let hospital = new Object({
    _nombre: nombre,
    _apellido: apellido,
    _trabajadores: trabajadores
  });

  Hospital.findOneAndUpdate({"_id":id}, hospital).then(obj => res.status(200).json({
    message:"Hospital reemplazado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar el hospital',
    obj: ex
  }));
}

function edit(req, res, next){
  const id = req.params.id;
  let nombre = req.body.nombre;
  let direccion = req.body.direccion;
  let trabajadores = req.body.trabajadores;

  let hospital = new Object();

  if(nombre){
    hospital._nombre = nombre;
  }

  if(direccion){
    hospital._direccion = direccion;
  }

  if(trabajadores){
    hospital._trabajadores = trabajadores;
  }

  Hospital.findOneAndUpdate({"_id":id}, hospital).then(obj => res.status(200).json({
    message:"Hospital actualizado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar el hospital',
    obj: ex
  }));
}

function destroy(req, res, next){
  const id = req.params.id;
  Hospital.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Hospital eliminado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar el hospital',
    obj: ex
  }));
}

module.exports = {
    list, index, create, replace, edit, destroy
}
