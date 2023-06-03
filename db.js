const mongoose = require('mongoose')
const mongoodbURL = 'mongodb+srv://arpansinghrajput123:Arpan%402003@history.um7v48z.mongodb.net/';
const connectToMongoo = ()=>{
   if(mongoose.connect(mongoodbURL)){
    console.log("Succesfully Connected")
   }
   else{
    console.log('Some Error Occured')
   }
}
module.exports = connectToMongoo;