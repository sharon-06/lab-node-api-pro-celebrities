const express = require('express');
const router = express.Router()
const Inventory = require('../model/Inventory')



//getting product
router.get("/",(req,res)=>{
    Inventory.find((err,product)=>{
        if(err)
        {
            res.json("Something went wrong")
            console.log(err)
        }
        else
        {
            res.json(product)
        }
    })
})

//adding product
router.post('/addProduct',(req,res)=>{
    const newInventory = new Inventory(req.body)
    newInventory.save()
    .then(product=>{
        res.json(product)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router