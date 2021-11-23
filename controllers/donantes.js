const express = require('express');
const path = require('path');
//const { json } = require('express');
const Donante = require('../models/donante')


function pagina(req, res, next){
  res.sendFile(path.resolve(__dirname,'../views/registro.html'));
}

function index(req, res, next){

    const id = req.params.id;
    Donante.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Donante almacenado con ID ${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        message: `No se encontro el donante almacenado con ID ${id}`,
        obj: ex
    }));

}

function create(req, res, next){
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;
    const edad= req.body.edad;
    const peso = req.body.peso;
    const tatuajes = req.body.tatuajes;
    const direccion = req.body.direccion;
    const tipoSangre = req.body.tipoSangre;

    let donante = new Donante({
        nombre:nombre,
        apellido:apellido,
        edad: edad,
        peso: peso,
        tatuajes: tatuajes,
        direccion: direccion,
        tipoSangre: tipoSangre
    });

    donante.save().then(obj => res.status(200).json({
        message: 'donante creado correctamente',
        obj: obj
    })).catch(ex => res.status(500).json({
        message: 'No se pudo almacenar el donante',
        obj:ex
    }));

}

function replace(req, res, next){
  const id = req.params.id;
  let nombre= req.body.nombre ? req.body.nombre: "";
  let apellido= req.body.apellido ? req.body.apellido: "";
  let edad= req.body.edad ? req.body.edad: "";
  let peso = req.body.peso ? req.body.peso: "";
  let tatuajes = req.body.tatuajes ? req.body.tatuajes: "";
  let direccion = req.body.direccion ? req.body.direccion: "";
  let tipoSangre = req.body.tipoSangre ? req.body.tipoSangre: "";

  let donante = new Donante({
      _nombre:nombre,
      _apellido:apellido,
      _edad: edad,
      _peso: peso,
      _tatuajes: tatuajes,
      _direccion: direccion,
      _tipoSangre: tipoSangre
  });

  Donante.findOneAndUpdate({"_id":id}, donante).then(obj => res.status(200).json({
    message:"Donante reemplazado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar el donante',
    obj: ex
  }));
}

function edit(req, res, next){
  const id = req.params.id;
  let nombre= req.body.nombre;
  let apellido= req.body.apellido;
  let edad= req.body.edad;
  let peso = req.body.peso;
  let tatuajes = req.body.tatuajes;
  let direccion = req.body.direccion;
  let tipoSangre = req.body.tipoSangre;

  let donante = new Object();

  if(nombre){
    donante._nombre = nombre;
  }

  if(apellido){
    donante._apellido = apellido;
  }

  if(edad){
    donante._edad = edad;
  }

  if(peso){
    donante._peso = peso;
  }

  if(tatuajes){
    donante._tatuajes = tatuajes;
  }

  if(direccion){
    donante._direccion = direccion;
  }

  if(tipoSangre){
    donante._tipoSangre = tipoSangre;
  }

  Donante.findOneAndUpdate({"_id":id}, donante).then(obj => res.status(200).json({
    message:"Donante actualizado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar el donante',
    obj: ex
  }));

}

function destroy(req, res, next){
  const id = req.params.id;
    Donante.remove({"_id":id}).then(obj => res.status(200).json({
      message:"Donante eliminado correctamente",
      obj:obj
    })).catch(ex => res.status(500).json({
      message: 'No se pudo eliminar el donante',
      obj: ex
    }));

}

module.exports = {
    pagina, index, create, replace, edit, destroy
}
