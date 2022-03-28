const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
var celeb = require('../controller/celebController')
let inventory = require('../controller/inventoryController')
let Client = require('../controller/clientController')

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'*'}))

app.listen(5000,()=>{console.log("Server started at 5000 port")})

app.use('/celebrities',celeb)
app.use('/',inventory)
app.use('/',Client)