const express =require('express');

function list(req, res, next) {
    //email,name,lastName,password
    res.send('lista de citas');
}

function index(req,res,next){   
    res.send(`Usuario del sistema con un ID = ${req.params.id}`);
}

function create(req,res,next){
    const idDonador = req.body.idDonador;
    const fecha = req.body.fecha;
    const tipoSangre =req.body.tipoSangre;
    const hospitalName = req.body.hospitalName;
    res.send(`Crear una cita nueva con donante ${idDonador} , fecha ${fecha}, tipo de sangre ${tipoSangre}, en el hospital ${hospitalName}`);
}

function replace(req,res,next){
    res.send(`Remplazo una cita con ID =${req.params.id} por otro.`);//params por el heather
}

function edit(req,res,next){
    res.send(`Remplazo propiedades de la cita con ID =${req.params.id} por otras.`);
}

function destroy(req,res,next){
    res.send(`elimino una cita con ID =${req.params.id} .`);
}

module.exports ={
    list, index,create,edit,replace,destroy
}