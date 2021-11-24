const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _idDonador: mongoose.Types.ObjectId,
  _fecha: Date,
  _tipoSangre: String,
  _nombreHospital: String
});

class Cita{

  constructor(idDonador,fecha,tipoSangre,nombreHospital){
    this._idDonador = idDonador;
    this._fecha = fecha;
    this._tipoSangre = tipoSangre;
    this._nombreHospital = nombreHospital;

  }

  get idDonador(){
    return this._idDonador;
  }

  set idDonador(v){
    this._idDonador = v;
  }

  get fecha(){
    return this._fecha;
  }

  set fecha(v){
    this._fecha = v;
  }

  get tipoSangre(){
    return this._tipoSangre;
  }

  set tipoSangre(v){
    this._tipoSangre = v;
  }

  get nombreHospital(){
    return this._nombreHospital;
  }

  set nombreHospital(v){
    this._nombreHospital = v;
  }

}

schema.loadClass(Cita);
module.exports = mongoose.model('Cita', schema);
