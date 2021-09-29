const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    id: Number,
    placa: {type: String, required:[true, 'Placa obligatorio']},
    tiempoInicio: {type: Date, default:Date.now},
    TipoVehiculo: String,
    Puesto: Number,
    tiempoFinal: {type: Date, default:Date.now},
    valorP: Number,
    Tarifa: Number,
    activo: { type: Boolean, default: true}
});
// const tarifaSchema = new Schema({
//     carros: Number,
//     moto:  Number
// });
// const LoginSchema = new Schema({
//     user: String,
//     pasword: String  
// })
module.exports = mongoose.model('tickets', ticketSchema );
//  'Tarifas', tarifaSchema, 'UserLog', LoginSchema );
