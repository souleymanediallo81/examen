var mongoose = require('mongoose');

var ProduitSchema = new mongoose.Schema({
    Name:String,
    Description:String,
    Price:Number,
    Stock:Number,
    Image:String,
    User_id:String,
    CreatedAt:Date

});

module.exports =mongoose.model('produit', ProduitSchema, 'Produits');