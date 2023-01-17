const customerModel = require("../model/customerModel")



const creatCustomer = async function(req,res){
    try{
        data= req.body
        result = await customerModel.create(data)
        let finalresult = result.select({})
        return res.status(201).send({status: true, msg: "Data created Successfully", data: result})

    }catch(err){
        return res.status(500).send({status: false,msg: err.message})
    }

}
const getCustomerDetails = async function(req,res){
    try{
        let result = await customerModel.find({status:"ACTIVE",isDeleted:false})
        // console.log(result)
        return res.status(200).send({status: true, msg: "All Data Fetched Successfully",dataCount: result.length, data: result})

    }catch(err){
        return res.status(500).send({status: false,msg: err.message})
    }

}
const deleteCustomer = async function(req,res){
    try{
        let customerId = req.body.customerId
        console.log(customerId);
        let result = await customerModel.findOneAndUpdate({customerId:customerId,isDeleted:false},{$set:{isDeleted:true,status:"INACTIVE"}})
        return res.status(200).send({status: true, msg: " Data Deleted Successfully"})
    }catch(err){
        return res.status(500).send({status: false,msg: err.message})
    }

}


module.exports={creatCustomer,getCustomerDetails,deleteCustomer}  


