const mongoose = require('mongoose')
const {ObjectId} = require('mongoose').Schema.Types

const ClientSchema = new mongoose.Schema({
    name:{
        type:String
    },
    productName:{
        type:String
    },
    productQuantity:{
        type:Number
    },
    order:{
        type:ObjectId,
        ref:'Inventory'
    },
    status:{
        type:String,
        default:"Pending"
    }
})

const Client = mongoose.model("Client",ClientSchema)

module.exports = Client