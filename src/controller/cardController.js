const cardModel = require('../model/cardModel')

const createCard = async function(req,res){
    try{
        data= req.body
        result = await cardModel.create(data)
        return res.status(201).send({status: true, msg: "Data created Successfully", data: result})

    }catch(err){
        return res.status(500).send({status: false,msg: err.message})
    }

}
const getCardDetails = async function(req,res){
    try{
        let result = await cardModel.find()
        return res.status(200).send({status: true, msg: "All Data Fetched Successfully", data: result})

    }catch(err){
        return res.status(500).send({status: false,msg: err.message})
    }

}



module.exports={createCard,getCardDetails}