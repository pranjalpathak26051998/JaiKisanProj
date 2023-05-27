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
        format:/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    },
    status:{type:String, enum:["ACTIVE","INACTIVE"]}
},{timestamps:true})
const customerModel=new mongoose.model("customer",customerSchema)
module.exports={customerModel}