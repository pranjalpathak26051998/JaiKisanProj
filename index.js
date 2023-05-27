const express=require('express')
const app=express()
const route=require('../JaiKisanProj/route/route')
const mongoose=require('mongoose')
require('dotenv').config() //for configuring dotenv
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGOCONNECT)
.then(()=>{console.log("MongoDB is connected at"+ process.env.PORT)})
.catch((err)=>{console.log("mongoDB is unable to connect due to "+err)})


app.use('/',route)

app.listen(3300, ()=>{
    console.log(`Express is running successfully at ${process.env.PORT}`)
})


