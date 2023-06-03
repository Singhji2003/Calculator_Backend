const mongoose = require('mongoose')
const { Schema } = mongoose;

const Calculation = new Schema({
    name:{
        type:String
    },
    Calculation:{
        type: String
    },
    Result:{
        type:Number
    }
});
module.exports = mongoose.model('calculation', Calculation)
