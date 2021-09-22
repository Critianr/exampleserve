const express = require('express');
const router = express.Router();

const Item = require('../models/item');
// peticion get
// res se envia
router.get('/', async (req, res)=>{
    const items = await Item.find();
    res.send(items);
});
// peticion post req/ el que me trae la informacion
router.post('/', async (req, res)=>{
    // res.send(new Item(req.body));
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});
router.get('/:id', async (req, res)=>{
    const item = await Item.findById(req.params.id);
    res.send(item);
});
module.exports = router;