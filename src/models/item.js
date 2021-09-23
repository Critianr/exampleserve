const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketIniSchema = new Schema({
    id: Number,
    placa: String,
    nombre: String,
    tiempoInicio: Date,
    TipoVehiculo: String,
    Puesto: Number
});
const ticketFinSchema = new Schema({
    id: Number,
    placa: String,
    tiempoliquidar: Date,
    TipoVehiculo: String,
    Puesto: Number
});
const liquidacioSchema = new Schema({
    tiempoFinal: Date,
    Puesto: Number
});
// const tarifas = new Schema({
//     carros: 78,
//     moto:  58,

// });
module.exports = mongoose.model('ticketInicial', ticketIniSchema, 'datosLiquidacion' , liquidacioSchema, 'ticketfinal', ticketFinSchema);
