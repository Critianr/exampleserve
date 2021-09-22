const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();
const indexRoutes = require('./routes/index')
const port = 3000;

//configuraciones
mongoose.connect('mongodb+srv://root:toor@cluster1.z3h0q.mongodb.net/Cluster1?retryWrites=true&w=majority')
  .then(db => console.log('Connected'))
  .catch(err => console.log(err))

//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//rutas
app.use('/items/', indexRoutes)

app.listen(port, ()=>{
    console.log('Server started');
});