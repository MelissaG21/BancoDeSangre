const express =require('express');

function list(req, res, next) {
    //email,name,lastName,password
    res.send('lista del personal');
}

function index(req,res,next){   
    res.send(`personal del sistema con un ID = ${req.params.id}`);
}

function create(req,res,next){
    const name = req.body.name;//implicitos o sobre el cuerpo
    const lastName = req.body.lastName;
    const hospitalName = req.body.hospitalName;
    res.send(`Crear un personal nuevo con nombre ${name} , apellido ${lastName}, hospital en el que trabaja ${hospitalName}`);
}

function replace(req,res,next){
    res.send(`Remplazo un personal con ID =${req.params.id} por otro.`);//params por el heather
}

function edit(req,res,next){
    res.send(`Remplazo propiedades del personal con ID =${req.params.id} por otras.`);
}

function destroy(req,res,next){
    res.send(`elimino un personal con ID =${req.params.id} .`);
}

module.exports ={
    list, index,create,edit,replace,destroy
}