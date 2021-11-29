// Use at least Nodemailer v4.1.0
const express = require("express");
const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email
/* nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'wade.welch45@ethereal.email',
            pass: '2ZVHaSC5w9qBQaTWpS'
        }
    });

    // Message object
    let message = {
        from: 'Sender Name <wade.welch45@ethereal.email>',
        to: 'Recipient <recipient@example.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}); */

var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'wade.welch45@ethereal.email',
        pass: '2ZVHaSC5w9qBQaTWpS'
    }
});

function send(req, res, next){
    // Obtener los parámetros pasados ​​por el front end
    var emailaddress = req.body.emailaddress;
    var firstname = req.body.firstname;
    var imgurl = req.body.imgurl;
    var lastname = req.body.lastname;

    var sendHtml = `<div>
        <div>firstName : ${firstname}</div>
        <div>lastname : ${lastname}</div>
        <div>emailaddress : ${emailaddress}</div>
        <div>file : <a href="${imgurl}">down upload file</a> </div>
    </div>`;
    
    var message = {
        from: 'Sender Name <wade.welch45@ethereal.email>',
        to: emailaddress,
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: sendHtml
    };

    transporter.sendMail(message,(err,info)=>{
        if (err) {
            console.log('Error occurred. ' + err.message);

        }
        console.log('Message sent: ' + info.response);
    })

    res.status(200).json({message: req.body.firstname});

}

module.exports = {
    send
}