
const {customerModel}=require('../models/customerModel')
const createNewCustomer = async (req,res)=>{
    try{
    let custData=req.body
    let savedData = await customerModel.create(custData)
    res.status(201).send({status:true,data:savedData})
}
catch(err){
    res.status(404).send({status:false,message:`the error is ${err}`})
}
}

module.exports={createNewCustomer}
