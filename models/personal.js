const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _nombre: String,
  _apellido: String,
  _nombreHospital: String
});

class Personal{

  constructor(nombre,apellido,nombreHospital){
    this._nombre = nombre;
    this._apellido = apellido;
    this._nombreHospital = nombreHospital;
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

}

schema.loadClass(Personal);
module.exports = mongoose.model('Personal', schema);
