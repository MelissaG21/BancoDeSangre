const express =require('express');
const path = require('path');
const Personal = require('../models/personal');

function pagina(req, res, next) {
  res.sendFile(path.resolve(__dirname,'../views/registroP.html'));
}

function index(req,res,next){
  const id = req.params.id;
    Personal.findOne({"_id":id}).then(obj => res.status(200).json({
      message: `Personal almacenado con ID ${id}`,
      obj: obj
    })).catch(ex => res.status(500).json({
      message: `No se pudo consultar la información del personal con ID ${id}`,
      obj: ex
    }));
}

function create(req,res,next){
    const nombre = req.body.nombre;//implicitos o sobre el cuerpo
    const apellido = req.body.apellido;
    const nombreHospital = req.body.nombreHospital;

    let personal = new Personal({
      nombre: nombre,
      apellido: apellido,
      nombreHospital: nombreHospital
    });

    personal.save().then(obj => res.status(200).json({
      message: 'Personal creado correctamente',
      obj: obj
    })).catch(ex => res.status(500).json({
      message: 'No se pudo almacenar el personal.',
      obj: ex
    }));
}

function replace(req,res,next){
  const id = req.params.id;
  let nombre = req.body.nombre ? req.body.nombre: "";
  let apellido = req.body.apellido ? req.body.apellido: "";
  let nombreHospital = req.body.nombreHospital ? req.body.nombreHospital: "";

  let personal = new Object({
      _nombre: nombre,
      _apellido: apellido,
      _nombreHospital: nombreHospital
    });

    Personal.findOneAndUpdate({"_id":id}, personal).then(obj => res.status(200).json({
      message:"Personal reemplazado correctamente",
      obj:obj
    })).catch(ex => res.status(500).json({
      message: 'No se pudo remplazar el personal',
      obj: ex
    }));

}

function edit(req,res,next){
  const id = req.params.id;
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let nombreHospital = req.body.nombreHospital;

  let personal = new Object();

  if(nombre){
    personal._nombre = nombre;
  }

  if(lastName){
    personal._apellido = apellido;
  }

  if(nombreHospital){
    personal._nombreHospital = nombreHospital;
  }

  Personal.findOneAndUpdate({"_id":id}, personal).then(obj => res.status(200).json({
    message:"Personal actualizado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar el personal',
    obj: ex
  }));

}

function destroy(req,res,next){
  const id = req.params.id;
  Personal.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Personal eliminado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar el personal',
    obj: ex
}));
}

module.exports ={
    pagina, index,create,edit,replace,destroy
}
