const express = require('express');
const router = express.Router()
const Inventory = require('../model/Inventory')
const Client = require('../model/Client')

//post

router.post('/addClient/:id',(req,res,next)=>{
    const { productName , productQuantity } = req.body
    Inventory.findOne({name:productName})
    .then(product=>{
        if (product.quantity > productQuantity)
        {
            let newClient = new Client({
                name:req.body.name,
                productname:req.body.productName,
                productQuantity: req.body.productQuantity,
                order:req.params.id,
                status:"Success"
            })
            newClient.save()
            .then(client=>{
                // res.send(client)
               
            })
            .catch(err=>{
                console.log(err)
            })

            let productQuant = (product.quantity - productQuantity)
            console.log(productQuant)
            const data = {
                name: productName,
                quantity: productQuant,
                inventoryName: product.inventoryName
            }

            Inventory.findByIdAndUpdate(req.params.id,data,{new:true})
            .then(product1=>{
                res.json(product1)
            })
            .catch(err=>{
                console.log(err)
            })

        }
        else
        {
            res.json({message:"Not enough products"})
            let newClient = new Client({
                name: req.body.name,
                productname: req.body.productName,
                productQuantity: 0,
                order: req.params.id,
                status: "Decline"
            })
            newClient.save()
                .then(client => {
                    // res.send(client)

                })
        }
    })
    .catch(err=>{
        console.log(err)
    })  
})

module.exports = router