const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({

    firstName:{
        type:String
    },
    lastName:{type:String},
    mobileNumber:{type:String},
    DOB:{type:String,
         format:Date},
    emailID :String,
    address:String,
    customerID:{
        type:String,
        format:uuid
    },
    status:{type:String, enum:["ACTIVE","INACTIVE"]}

})