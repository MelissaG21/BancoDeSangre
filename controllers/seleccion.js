var express = require('express');
const bcript =  require('bcrypt');
const async = require('async');
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const path = require('path');
//const inicio = require('../views/inicio');

function seleccion(req, res, next){
    //res.render('index', {title: 'Banco de sangre c:'});
    res.sendFile(path.resolve(__dirname,'../views/seleccion.html'));
    //res.sendFile(path.resolve(__dirname,'../views/hola.html'));
}

module.exports = {
    seleccion
}