const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    id: Number,
    placa: String,
    tiempoInicio: Date,
    TipoVehiculo: String,
    Puesto: Number,
    tiempoFinal: Date,
    valorP: Number,
    Tarifa: Number
});
const tarifaSchema = new Schema({
    carros: Number,
    moto:  Number
});
const LoginSchema = new Schema({
    user: String,
    pasword: String  
})
module.exports = mongoose.model('Ticket', ticketSchema, 'Tarifas', tarifaSchema, 'UserLog', LoginSchema );
