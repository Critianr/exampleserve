const express = require('express');
const router = express.Router();
const authservice = require('../services/auth.service');
const Item = require('../models/item');
const User = require('../models/user');
const { token } = require('morgan');
// peticion get
// res se envia
// router.get('/', async (req, res)=>{
//     const items = await Item.find();
//     res.send(items);
//     console.log('ya llego')
// });
// peticion post req/ el que me trae la informacion
router.post('/', async (req, res)=>{
    // res.send(new Item(req.body));
    const item = await new Item.find(req.body);
    await item.save();
    res.send(item);
});
router.get('/:id', async (req, res)=>{
    const item = await Item.findById(req.params.id);
    res.send(item);
});
// ---------------------------------------- auth route
router.post('/login', async (req, res)=>{
    try{
        const {email, password}= req.body;
        if(!email || !password ) {
            return res.status(400).json('email adn pass required');
        }
        let token = await authservice.login(req.body);
        if(token){
           res.status(token.code).json(token);
        }
        }catch(error){
        res.send(error);
    }
});
router.post('/register', async (req, res) => {
    try{
        const user = new User(req.body);
        const userData = await authservice.register(user);
        res.send(userData);
    }catch(error){
        res.send(error)
    }
});
module.exports = router;