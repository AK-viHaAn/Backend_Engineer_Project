const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: String },
    DOB: { type: String },
    emailID: { type: String },
    address: { type: String },
    customerId: { type: String },
    status: {
        type: String,
        enum : ["ACTIVE","INACTIVE"],
        default: "ACTIVE"
    },
    isDeleted :{
        type: Boolean,
        default: false
    }
}
)  

module.exports = mongoose.model("customers", customerSchema)