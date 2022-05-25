var mongoose = require('mongoose');

var UtilisateurSchema = new mongoose.Schema({

    Username:String,
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    Avatar: String,
    CreatedAt: Date
});


module.exports =mongoose.model('utilisateur', UtilisateurSchema, 'Utilisateurs');