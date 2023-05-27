const {cardModel}=require('../models/cardModel')

const createCard=async (req,res)=>{
    try{
    let data=req.body
    let savedCardData=await cardModel.create(data)
    res.status(201).send({status:true,data:savedCardData})
}
catch(err){
    res.status(404).send({status:false,message:`the error is due to ${err}`})
}
}
module.exports={createCard}     