const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require("./route/route")
mongoose.set('strictQuery', true);


app.use(express.json())

mongoose.connect("mongodb+srv://viHaAn:vihaan@cluster0.tznueha.mongodb.net/Backend_Engineer",{ useNewUrlParser: true })

.then(()=>console.log("mongoDB bhi connect ho chuka"))
.catch(err=>console.log(err,"ye wala dikkat aaya hai iss baar"))


app.use('/',route)

app.listen(3000,function(){
    console.log("Apna serverwa "+ 3000 + " pe run ho gya or pta hai");
})
