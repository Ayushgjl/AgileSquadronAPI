const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    item: {
        type: String,
        required:true
    }
});

const SuperSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:false
    },
    food: [foodSchema]
},{timestamps:true});

module.exports = mongoose.model('food',SuperSchema);