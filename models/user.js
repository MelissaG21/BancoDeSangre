const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _correo: String,
  _password: String,
  _tipoUsuario: String,
  _salt:String
});

class User{

  constructor(correo,password,tipoUsuario){
    this._correo = correo;
    this._password = password;
    this._tipoUsuario = tipoUsuario;
    this._salt = salt;
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

  get salt(){
    return this._salt;
  }

  set salt(v){
    this._salt = v;
  }

}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
