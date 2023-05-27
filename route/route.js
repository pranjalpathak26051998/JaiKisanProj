const express=require('express')

const router=express.Router()

router.post('/test-api', (req,res)=>{
    res.status(200).send({message:"Connection-Server running successfully"})
})

module.exports=router