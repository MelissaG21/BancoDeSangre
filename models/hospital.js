const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _nombre: String,
  _direccion: String,
  _trabajadores: Number
});

class Hospital{

  constructor(nombre,direccion,trabajadores){
    this._nombre = nombre;
    this._direccion = direccion;
    this._trabajadores = trabajadores;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(v){
    this._nombre = v;
  }

  get direccion(){
    return this._direccion;
  }

  set direccion(v){
    this._direccion = v;
  }

  get trabajadores(){
    return this._trabajadores;
  }

  set trabajadores(v){
    this._trabajadores = v;
  }

}

schema.loadClass(Hospital);
module.exports = mongoose.model('Hospital', schema);
