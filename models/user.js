const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _correo: String,
  _password: String,
  _tipoUsuario: String
});

class User{

  constructor(correo,password,tipoUsuario){
    this._correo = correo;
    this._password = password;
    this._tipoUsuario = tipoUsuario;
  }

  get correo(){
    return this._correo;
  }

  set correo(v){
    this._correo = v;
  }

  get password(){
    return this._password;
  }

  set password(v){
    this._password = v;
  }

  get tipoUsuario(){
    return this._tipoUsuario;
  }

  set tipoUsuario(v){
    this._tipoUsuario = v;
  }

}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
