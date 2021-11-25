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
    let email = req.body.email;
    let password = req.body.password; 
    //res.sendFile(path.resolve(__dirname,'../views/hola.html'));

    async.parallel({
        user: callback => User.findOne({_email:email})
        .select('_password _salt')
        .exec(callback)
    },(err,result)=>{
        if(result.user){
            bcript.hash(password,result.user.salt, (err,hash)=>{
                if(hash === result.user.password){
                    res.status(200).json({
                    "message":"Usuarios y/o contraseña okay.", 
                    "obj":jwt.sign(result.user.id,jwtKey)
                    });
                }else{
                    res.status(403).json({
                        "message":"Usuarios y/o contraseña incorrectos.", obj:null
                    });
                }
            })
        }else{
            res.status(403).json({
                "message":"Usuarios y/o contraseña incorrectos.", obj:null
            });
        }
    });
}

module.exports = {
    home, inicio
}