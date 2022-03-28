const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    inventoryName:{
        type:String,
        required:true
    }
})

const Inventory = mongoose.model('Inventory',ProductSchema)

module.exports = Inventory