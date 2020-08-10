const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},

phoneNumber:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
password: {
                type:String,
                required:true
         },
image: {
            type:String
        },

},{timestamps: true })

module.exports = mongoose.model('user',userSchema);