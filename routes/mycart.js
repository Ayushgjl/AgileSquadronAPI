const express = require('express');
const members = require('../model/mycart');

const router = express.Router();

router.route('/')
    .get((req,res,next)=>{
        members.find()
        .then((member)=>{
            res.json(member);
        }).catch(next);
})

.post((req,res,next)=>{
    members.create(req.body)
    .then((member)=>{
        res.json(member);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next) =>{
    members.findById(req.params.id)
    .then((member)=>{
        res.json(member.food);
    }).catch(next);
})

.post((req,res,next)=>{
    members.findById(req.params.id)
        .then((member) =>{
            member.food.push(req.body);
            member.save()
            .then((member) => {
        res.json(member);
        })
    }).catch(next);
})


.delete((req, res, next)=>{
    members.findByIdAndDelete(req.params.id)
    .then((status)=>{
        res.json(status);
    }).catch(next);
})


module.exports = router;