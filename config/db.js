const mongoose = require('mongoose')
const password = "root"
const dbname = "ProCelebraties"

//connecting database
mongoose.connect(`mongodb+srv://Abhishek:${password}@cluster0.uquim.mongodb.net/${dbname}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(ok=>console.log("Connected to mongodb"))
.catch(err=>console.log("Error occured while connecting to database:",err))

module.exports = mongoose