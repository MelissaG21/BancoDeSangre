const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _nombre: String,
  _apellido: String,
  _nombreHospital: String,
  _correo: String,
  _contrasena:String
});

class Personal{

  constructor(nombre,apellido,nombreHospital){
    this._nombre = nombre;
    this._apellido = apellido;
    this._nombreHospital = nombreHospital;
    this._correo = correo;
    this._password = password;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(v){
    this._nombre = v;
  }

  get apellido(){
    return this._apellido;
  }

  set apellido(v){
    this._apellido = v;
  }

  get nombreHospital(){
    return this._nombreHospital;
  }

  set nombreHospital(v){
    this._nombreHospital = v;
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

}

schema.loadClass(Personal);
module.exports = mongoose.model('Personal', schema);
