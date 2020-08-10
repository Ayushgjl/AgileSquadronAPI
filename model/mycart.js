const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    type: {
        type: String,
        required:true
    }
});

const NewMembers = new mongoose.Schema({

    user: {
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    // image:{
    //     type:String,
    //     required:true
    // },
    food: [foodSchema]
},{timestamps:true}); 

module.exports = mongoose.model('mycart',NewMembers);