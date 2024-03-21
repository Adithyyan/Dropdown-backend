const mongoose = require('mongoose');

//defining shema
const itemShema = new mongoose.Schema({
    Itmid:{type:String, required:true, trim:true},
    itmname:{type:String, required:true, trim:true}
})

//model
const itemModel = mongoose.model("item",itemShema)

module.exports = itemModel;