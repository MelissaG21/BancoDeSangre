var express = require('express');

function home(req, res, next){
    res. render('index', {title: 'Banco de sangre c:'});
}

module.exports = {
    home
}