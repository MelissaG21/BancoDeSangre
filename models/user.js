const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
  _correo: String,
  _password: String,
  _tipoUsuario: String,
  _salt:String,
  _profiles: [{
    type: mongoose.Schema.ObjectId, ref: 'Profile'
  }]
});

class User{

  constructor(correo,password,tipoUsuario){
    this._correo = correo;
    this._password = password;
    this._tipoUsuario = tipoUsuario;
    this._salt = salt;
    this._profiles = profiles;
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

  get profiles(){
    return this._profiles;
  }

  set profiles(v){
      this._profiles = v;
  }

}

schema.loadClass(User);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', schema);
