const express = require('express');
const router = express.Router();
const sweet = require('../model/clothes');

router.route('/')
.get((req,res,next)=>{
    sweet.find()
    .then((sweets)=>{
        res.json(sweets);
    }).catch(next);
})

.post((req,res,next)=>{
sweet.create(req.body)
.then((sweets)=>{
    res.json(sweets);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    sweet.findById(req.params.id)
    .then((sweets) =>{
    res.json(sweets);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
});

module.exports = router;