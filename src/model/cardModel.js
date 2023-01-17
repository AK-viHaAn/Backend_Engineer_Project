const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardNumber: { type: String },
    cardType: { type: String,
    enum: ["REGULAR,SPECIAL]"]},
    customerName: { type: String },
    vision: { type: String },
    address: { type: String },
    customerID: { type: String },
    status: {
        type: String,
        ref : "customers"
    },
}, { timestamps: true })

module.exports=mongoose.model("cards",cardSchema)