const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _nombre: String,
  _apellido: String,
  _edad: Number,
  _peso: mongoose.Types.Decimal128,
  _tatuajes: Boolean,
  _direccion: String,
  _tipoSangre: String, 
  _correo: String,
  _contrasena:String
});

class Donante{

  constructor(nombre,apellido,edad,peso,tatuajes,direccion,tipoSangre){
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._peso = peso;
    this._tatuajes = tatuajes;
    this._direccion = direccion;
    this._tipoSangre = tipoSangre;
    this._correo = correo;
    this._contrasena = contrasena;

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

  get edad(){
    return this._edad;
  }

  set edad(v){
    this._edad = v;
  }

  get peso(){
    return this._peso;
  }

  set peso(v){
    this._peso = v;
  }

  get tatuajes(){
    return this._tatuajes;
  }

  set tatuajes(v){
    this._tatuajes = v;
  }

  get direccion(){
    return this._direccion;
  }

  set direccion(v){
    this._direccion = v;
  }

  get tipoSangre(){
    return this._tipoSangre;
  }

  set tipoSangre(v){
    this._tipoSangre = v;
  }

  get correo(){
    return this._correo;
  }

  set correo(v){
    this._correo = v;
  }

  get contrasena(){
    return this._contrasena;
  }

  set contrasena(v){
    this._contrasena = v;
  }

}

schema.loadClass(Donante);
module.exports = mongoose.model('Donante', schema);
