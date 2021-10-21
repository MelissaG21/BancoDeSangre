const express = require('express');

//RESFULL = GET, POST, PUT, PACH Y DELETE
//Modelo = Una estructura de datos que representa una entidad real
function list(req, res, next){
    res.send('Lista de hospitales del sistema');
}
 
function index(req, res, next){
    res.send(`Hospital del sistema con un ID = ${req.params.id}`);
}

function create(req, res, next){
    const name= req.body.name;
    const address= req.body.address;
    const workers = req.body.workers;

    res.send(`Crear un hospital nuevo con nombre ${name}`);
}

function replace(req, res, next){
    res.send(`Remplazo un hospital con ID = ${req.params.id} por otro`);
}

function edit(req, res, next){
    res.send(`Remplazo las propiedades de un hospital con ID = ${req.params.id} por otro`);
}

function destroy(req, res, next){
    res.send(`Elimino un hospital con ID = ${req.params.id} por otro`);
}

module.exports = {
    list, index, create, replace, edit, destroy
}
