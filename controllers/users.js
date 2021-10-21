const express =require('express');

function list(req, res, next) {
    //email,name,lastName,password
    res.send('lista de usuarios');
}

function index(req,res,next){   
    res.send(`Usuario del sistema con un ID = ${req.params.id}`);
}

function create(req,res,next){
    const name = req.body.name;//implicitos o sobre el cuerpo
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const tipoUser = req.body.password;
    res.send(`Crear un usuario nuevo con nombre ${name} , apellido ${lastName}, email ${email}, tipo de usuario ${tipoUser}`);
}

function replace(req,res,next){
    res.send(`Remplazo un usuario con ID =${req.params.id} por otro.`);//params por el heather
}

function edit(req,res,next){
    res.send(`Remplazo propiedades del usuario con ID =${req.params.id} por otras.`);
}

function destroy(req,res,next){
    res.send(`elimino un usuario con ID =${req.params.id} .`);
}

module.exports ={
    list, index,create,edit,replace,destroy
}