const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));
const ticketSchema = new Schema({
    id: Number,
    placa: String,
    tiempoInicio: { type: Date, default:timeStamp },
    TipoVehiculo: String,
    Puesto: Number,
    tiempoFinal: { type: Date, default:timeStamp },
    valorP: Number,
    Tarifa: Number,
    // activo: { type: Boolean, default: true},
});
ticketSchema.tiempoInicio instanceof Date;
module.exports = mongoose.model('tickets', ticketSchema );
//  'Tarifas', tarifaSchema, 'UserLog', LoginSchema );
