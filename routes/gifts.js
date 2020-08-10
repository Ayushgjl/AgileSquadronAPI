const express = require('express');
const router = express.Router();
const alcohol = require('../model/gifts');

router.route('/')
.get((req,res,next)=>{
    alcohol.find()
    .then((alcohols)=>{
        res.json(alcohols);
    }).catch(next);
})

.post((req,res,next)=>{
    alcohol.create(req.body)
.then((alcohols)=>{
    res.json(alcohols);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    alcohol.findById(req.params.id)
    .then((alcohols) =>{
    res.json(alcohols);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next) =>{
    alcohol.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
    .then((alcohols)=>{
        res.json(alcohols.food);
    }).catch(next);
})

.delete((req, res, next)=>{
    alcohol.findByIdAndDelete(req.params.id)
    .then((alcohols)=>{
        res.json(alcohols);
    }).catch(next);
});

module.exports = router;