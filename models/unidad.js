const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _nombreHospital: String,
  _tipoSangre: String,
  _cantidad: Number
});

class Unidad{

  constructor(nombreHospital,tipoSangre,cantidad){
    this._nombreHospital = nombreHospital;
    this._tipoSangre = tipoSangre;
    this._cantidad = cantidad;
  }

  get nombreHospital(){
    return this._nombreHospital;
  }

  set nombreHospital(v){
    this._nombreHospital = v;
  }

  get tipoSangre(){
    return this._tipoSangre;
  }

  set tipoSangre(v){
    this._tipoSangre = v;
  }

  get cantidad(){
    return this._cantidad;
  }

  set cantidad(v){
    this._cantidad = v;
  }

}

schema.loadClass(Unidad);
module.exports = mongoose.model('Unidad', schema);
