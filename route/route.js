const express=require('express')
const customerControllers=require('../controllers/custController')
const cardControllers=require('../controllers/cardController')
const router=express.Router()

router.post('/test-api', (req,res)=>{
    res.status(200).send({message:"Connection-Server running successfully"})
})

router.post('/createNewCustomer',customerControllers.createNewCustomer)
router.post('/createNewCard',cardControllers.createCard)
module.exports=router
