const express =require('express');
const bcript =  require('bcrypt');
const async = require('async');
const User = require('../models/user');
const adminAbility = require('../models/adminAbility')
const userAblility = require('../models/userAbility');
const Profile = require('../models/profile');
const Permission = require('../models/permission');
const path = require('path');

/* var map = {}
map['admin'] = adminAbility;
map['user'] = userAblility; */



 function list(req, res, next) {
  /*let id = req.body.id;
  let user = await User.findOne({"_id":id});
  let profileName;
  var query;

  user = JSON.parse(JSON.stringify(user));
  user._profiles.forEach(async(profileId) => {
      profileName = await Profile.findOne({"_id":profileId});
      profileName = JSON.parse(JSON.stringify(profileName))._description;
      try {
          query = await User.accessibleBy(map[profileName], 'read').populate({
              path: '_profiles',
              populate: { path: '_permissions' }
          });
          res.status(200).json({
              message: 'Lista de Usuarios del sistema',
              obj: query
          })
        } catch (error) {
          console.log(error) // ForbiddenError;
          res.status(500).json({
              message: 'ERROR',
              obj: error
          })
        }
  })*/

  let page = req.params.page ? req.params.page: 1;
  User.paginate({}, {page:page, limit:3}).then(objs => res.status(200).json({
    message: 'Lista de usuarios del sistema',
    obj:objs
  })).catch(ex => res.status(500).json({
    message: 'No se pudo consultar la información del usuario',
    obj: ex
  }));
}



function index(req,res,next){
  const id = req.params.id;
  User.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Usuario almacenado con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información del usuario con ID ${id}`,
    obj: ex
  })); 
}

function create(req,res,next){
    let correo = req.body.correo;
    let password = req.body.password;
    let tipoUsuario = req.body.tipoUsuario;
    let profiles = req.body.profiles;

    async.parallel({
      salt:(callback) =>{
        bcript.genSalt(10, callback);
      }
    }, (err, result) =>{
      bcript.hash(password, result.salt,(err, hash)=>{
        let user = new User({
          correo:correo,
          password:hash,
          tipoUsuario:tipoUsuario,
          profiles:profiles,
          salt:result.salt
        });
    
        user.save().catch(ex => res.status(500).json({
          message: 'No se pudo almacenar el usuario.',
          obj: ex
        }));

        if(user._tipoUsuario == 'Personal'){
          res.sendFile(path.resolve(__dirname,'../views/inicioDonante.html'));
        }else{
          res.sendFile(path.resolve(__dirname,'../views/inicioPersonal.html'));
        }
      })
    })
}

function replace(req,res,next){
  const id = req.params.id ? req.params.id: "" ;
  let correo = req.body.correo ? req.body.correo:"";
  let password = req.body.password ? req.body.password:"";
  let tipoUsuario = req.body.tipoUsuario ? req.body.tipoUsuario: "";
  let profiles = req.body.profiles ? req.body.profiles: "";

  let user = new Object({
    _correo: correo,
    _password: password,
    _tipoUsuario: tipoUsuario,
    _profiles: profiles
  });

  User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
    message:"Usuario reemplazado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar el usuario',
    obj: ex
  }));

}

function edit(req,res,next){
  const id = req.params.id;
  let correo = req.body.correo;
  let password = req.body.password;
  let tipoUsuario = req.body.tipoUsuario;
  let profiles = req.body.profiles;

  let user = new Object();

  if(correo){
    user._correo = correo;
  }

  if(password){
    user._password = password;
  }

  if(tipoUsuario){
    user._tipoUsuario = tipoUsuario;
  }

  if(profiles){
    user._profiles = profiles;
  }

  User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
    message:"Usuario actualizado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar el usuario',
    obj: ex
  }));

}

function destroy(req,res,next){
  const id = req.params.id;
  User.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Usuario eliminado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar el usuario',
    obj: ex
  }));
}

module.exports ={
    list, index,create,edit,replace,destroy
}
