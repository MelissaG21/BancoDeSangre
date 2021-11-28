var express = require('express');
const bcript =  require('bcrypt');
const async = require('async');
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const path = require('path');
//const inicio = require('../views/inicio');

const jwtKey = "aad574a1222540c655376f7985f8497d";

function home(req, res, next){
    //res. render('index', {title: 'Banco de sangre c:'});
    res.sendFile(path.resolve(__dirname,'../views/login.html'));
    //res.sendFile(path.resolve(__dirname,'../views/hola.html'));
}



function inicio(req, res, next){
    let correo = req.body.correo;
    let password = req.body.password; 
    //res.sendFile(path.resolve(__dirname,'../views/hola.html'));

    async.parallel({
        user: callback => User.findOne({_correo:correo})
        .select('_password _salt _tipoUsuario')
        .exec(callback)
    },(err,result)=>{
        if(result.user){
            bcript.hash(password,result.user.salt, (err,hash)=>{
                if(hash === result.user.password){
                    if(result.user.tipoUsuario == "Donante"){
                        res.sendFile(path.resolve(__dirname,'../views/inicioDonante.html'));
                    }else{
                        res.sendFile(path.resolve(__dirname,'../views/inicioPersonal.html'));
                    }
                }else{
                    res.sendFile(path.resolve(__dirname,'../views/login.html'));
                }
            })
        }else{
            res.sendFile(path.resolve(__dirname,'../views/login.html'));
        }
    });
}

module.exports = {
    home, inicio
}