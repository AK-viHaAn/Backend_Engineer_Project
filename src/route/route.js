const express = require('express')
const router = express.Router()
const coustomerController = require("../controller/customerController")
const cardController = require("../controller/cardController")

router.post('/createCustomer',coustomerController.creatCustomer)
router.get('/getCustomerDetails',coustomerController.getCustomerDetails)
router.delete('/deleteCustomer',coustomerController.deleteCustomer)
router.post('/createCard',cardController.createCard)
router.post('/getCardDetails',cardController.getCardDetails)













module.exports=router