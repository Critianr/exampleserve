const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();
const indexRoutes = require('./routes/index')

//configuraciones
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb+srv://root:toor@cluster0.q692i.mongodb.net/Cluster0?retryWrites=true&w=majority')
  //  mongoose.connect('mongodb://localhost:localhost:27017/mevn-parqueadero')
  .then(db => console.log('mi base Connected'))
  .catch(err => console.log(err))

//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//rutas
// app.use('/items/', indexRoutes)
app.use('/', indexRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Server started');
});