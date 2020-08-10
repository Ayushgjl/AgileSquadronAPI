const express = require('express');
const mongoose = require('mongoose');
const brandRouter = require('./routes/electronics');
const bedRouter = require('./routes/food');
const cartRouter = require('./routes/mycart');
const wardrobeRouter  = require('./routes/clothes');
const diningRouter = require('./routes/gifts');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const cors = require('cors')

mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use('/user',userRouter);
app.use('/upload', uploadRouter);
app.use('/electronics',brandRouter); 
app.use('/food',bedRouter); 
app.use('/mycart', cartRouter)
app.use('/clothes', wardrobeRouter);
app.use('/gifts', diningRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

