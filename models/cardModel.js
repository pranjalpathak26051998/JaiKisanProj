const mongoose=require('mongoose')

const cardSchema=new mongoose.Schema({
    cardNumber:{type:String,
        seq: { type: Number, default: 0 }
    },
    cardType:{type:String, enum:["REGULAR","SPECIAL"]},
    status:{type:String,enum:["ACTIVE","INACTIVE"],default:"ACTIVE"},
    vision:String,
    customerID:{
        type:String,
        //mongoose.Schema.Types.customerID,
        ref:"customer"
    }
},{timestamps:true})
const cardModelSchema = mongoose.model('card',cardSchema)
module.exports={cardModelSchema}
