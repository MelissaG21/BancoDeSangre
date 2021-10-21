const express = require('express');
//const { json } = require('express');
//const Donante = require('../models/donante')


function list(req, res, next){
    res.send('Lista de donantes del sistema');
    
    /*
    Donante.find().then(objs => res.status(200).json({
        message: "Lista de donantes del sistema",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se puso consultar la informacion de los donantes",
        obj:ex
    }));
    */
}
 
function index(req, res, next){
    res.send(`Donante del sistema con un ID = ${req.params.id}`);

    /*
    const id = req.params.id;
    Donante.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Donante almacenado con ID ${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        message: `No se encontro el actor almacenado con ID ${id}`,
        obj: ex
    }));
    */
}

function create(req, res, next){
    const name= req.body.name;
    const lastName= req.body.lastName;
    const age= req.body.age;
    const weight = req.body.weight;
    const tattoos = req.body.tattoos;
    const address = req.body.address;
    const bloodType = req.body.bloodType;

    res.send(`Crear un usuario nuevo con nombre ${name} y apellido ${lastName}`);

    /*
    const name= req.body.name;
    const lastName= req.body.lastName;
    const age= req.body.age;
    const weight = req.body.weight;
    const tattoos = req.body.tattoos;
    const address = req.body.address;
    const bloodType = req.body.bloodType;

    let actor = new Actor({
        name:name,
        lastName:lastName,
        age:age,
        weight:weight,
        tattoos:tattoos,
        address:address,
        boodType:bloodType
    });

    actor.save().then(obj => res.status(200).json({
        message: 'Actor creado correctamente',
        obj: obj
    })).catch(ex => res.status(500).json({
        message: 'No se pudo almacenar el actor',
        obj:ex
    }));
    */
}

function replace(req, res, next){
    res.send(`Remplazo un usuario con ID = ${req.params.id} por otro`);
}

function edit(req, res, next){
    res.send(`Remplazo las propiedades de un usuario con ID = ${req.params.id} por otro`);
}

function destroy(req, res, next){
    res.send(`Elimino un usuario con ID = ${req.params.id} por otro`);
}

module.exports = {
    list, index, create, replace, edit, destroy
}
