const mongoose = require('mongoose')
const mongoodbURL = 'mongodb+srv://arpansinghrajput123:Arpan2003@cluster0.ujz6dc9.mongodb.net/';
const connectToMongoo = ()=>{
   if(mongoose.connect(mongoodbURL)){
    console.log("Succesfully Connected")
   }
   else{
    console.log('Some Error Occured')
   }
}
module.exports = connectToMongoo;