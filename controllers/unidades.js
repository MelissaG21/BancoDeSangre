const express = require('express');

//RESFULL = GET, POST, PUT, PACH Y DELETE
//Modelo = Una estructura de datos que representa una entidad real
function list(req, res, next){
    res.send('Lista de unidades del sistema');
}
 
function index(req, res, next){
    res.send(`Unidades del sistema con un ID = ${req.params.id}`);
}

function create(req, res, next){
    const hospitalName= req.body.hospitalName;
    const bloodType= req.body.bloodType;
    const quantity = req.body.quantity;

    res.send(`Crear una unidad nueva del hospital ${hospitalName}`);
}

function replace(req, res, next){
    res.send(`Remplazo una unidad con ID = ${req.params.id} por otro`);
}

function edit(req, res, next){
    res.send(`Remplazo las propiedades de una unidad con ID = ${req.params.id} por otro`);
}

function destroy(req, res, next){
    res.send(`Elimino una unidad con ID = ${req.params.id} por otro`);
}

module.exports = {
    list, index, create, replace, edit, destroy
}
