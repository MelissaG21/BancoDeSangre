const express =require('express');
const Cita = require('../models/cita');
const path = require('path');

function pagina(req, res, next){
  res.sendFile(path.resolve(__dirname,'../views/agendarC.html'));
}

function index(req,res,next){
  const id = req.params.id;
  Cita.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Cita almacenada con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información de la cita con ID ${id}`,
    obj: ex
  }));
}

function create(req,res,next){
    const idDonador = req.params.idDonador;
    const fecha = req.body.fecha;
    const tipoSangre =req.body.tipoSangre;
    const nombreHospital = req.body.nombreHospital;

    let cita = new Cita({
      idDonador:idDonador,
      fecha:fecha,
      tipoSangre: tipoSangre,
      nombreHospital: nombreHospital
    });

    let band = false;
    cita.save().then(band = true)/*then(obj => res.status(200).json({
      message: 'Cita almacenada correctamente.',
      obj: obj
    }))*/.catch(ex => res.status(500).json({
      message: 'No se pudo almacenar la cita.',
      obj: ex
    }));
    if(band){
      res.sendFile(path.resolve(__dirname,'../views/inicioDonante.html'));
    }
  }

function replace(req,res,next){
  const id = req.params.id;
  let idDonador = req.body.idDonador ? req.body.idDonador: "";
  let fecha =  req.body.fecha ? req.body.fecha: "";
  let tipoSangre =req.body.tipoSangre ? req.body.tipoSangre: "";
  let nombreHospital = req.body.nombreHospital ? req.body.nombreHospital: "";

  let cita = new Object({
    idDonador:idDonador,
    fecha:fecha,
    tipoSangre: tipoSangre,
    nombreHospital: nombreHospital
  });

  Cita.findOneAndUpdate({"_id":id}, cita).then(obj => res.status(200).json({
    message:"Cita reemplazada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar la cita',
    obj: ex
  }));

}

function edit(req,res,next){
  const id = req.params.id;
  let idDonador = req.body.idDonador;
  let fecha =  req.body.fecha;
  let tipoSangre =req.body.tipoSangre;
  let nombreHospital = req.body.nombreHospital;

  let cita = new Object();

  if(idDonador){
    cita._idDonador = idDonador;
  }

  if(fecha){
    cita._fecha = fecha;
  }

  if(tipoSangre){
    cita._tipoSangre = tipoSangre;
  }

  if(nombreHospital){
    cita._nombreHospital = nombreHospital;
  }

  Cita.findOneAndUpdate({"_id":id}, cita).then(obj => res.status(200).json({
    message:"Cita actualizada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar la cita',
    obj: ex
  }));

}

function destroy(req,res,next){
  const id = req.params.id;
  Cita.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Cita eliminada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar la cita',
    obj: ex
  }));
}

module.exports ={
    pagina, index,create,edit,replace,destroy
}
