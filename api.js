var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var ProduitModel = require('./produitchema');
var UtilisateurModel = require('./utilisateurchema');
//const { default: mongoose } = require('mongoose');

//connection a la base

var query = 'mongodb://localhost:27017/boutique';

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true}, function(error){
    if(error){
        console.log("Error! "+ error);
    }

});

//ajout d'un produit
router.post('/produits/save', function(req, res){
    var nvProduit = new ProduitModel();

    // Name: "Banane",
    // Description: "Banane Importe de la CDI",
    // Price: 1000,
    // Stock: 100,
    // Image: "test.jpg",
    // User_id: "001",
    // CreatedAt: Date.now()
    nvProduit.Name = req.body.Name;
    nvProduit.Description = req.body.Description;
    nvProduit.Price = req.body.Price;
    nvProduit.Stock = req.body.Stock;
    nvProduit.Image = req.body.Image;
    nvProduit.User_id = req.body.User_id;
    nvProduit.CreatedAt = req.body.CreatedAt;

    



    //res.setHeader('content-type', 'application/json');

    nvProduit.save(function(err, data){
        if(err){
            console.log(err);

        }else{
            res.send(data);
        }
    });
});


//recuperer tout les produit
router.get('/produits', function(req, res){
    ProduitModel.find(function(err, data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
})

//suppression
router.delete('/produits/:id',function(req, res){
    ProduitModel.remove({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(req.params.id);
            res.send(data);
            console.log("data deleted !");
        }
    });
})

//findById
router.get('/produits/:id',function(req, res){
    ProduitModel.findById({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(req.params.id);
            res.send(data);
            //console.log("data deleted !");
        }
    });
})

//modification
router.put('/produits/:id',function(req, res){
    ProduitModel.findById({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            data.Name = req.body.Name;
            data.Description = req.body.Description;
            data.Price = req.body.Price;
            data.Stock = req.body.Stock;
            data.Image = req.body.Image;
            data.User_id = req.body.User_id;
            data.CreatedAt = req.body.CreatedAt;
            data.save(function(err){
               if(err){ res.send(err)}
               res.send('Mise a jour ok !');
            })
            
           
        }
    });
})




    //===================================PARTIE UTILISATEUR=======================

    //PARTIE LOGIN
    router.post('/users/login', function(req, res){
        var nvUser = new UtilisateurModel();
    

        nvUser.Email = req.body.Email;
        nvUser.Password = req.body.Password;
        req.body.CreatedAt = Date.now();
        nvUser.CreatedAt = req.body.CreatedAt;
    
            nvUser.save(function(err, data){
            if(err){
                console.log(err);
    
            }else{
                res.send(data);
            }
        });
    });


    //PARTIE signup
    router.post('/users/signup', function(req, res){
        var nvUser = new UtilisateurModel();
    

        nvUser.Username = req.body.Username;
        nvUser.Firstname = req.body.Firstname;
        nvUser.Lastname = req.body.Lastname;
        nvUser.Email = req.body.Email;
        nvUser.Password = req.body.Password;
        nvUser.Avatar= req.body.Avatar;
        req.body.CreatedAt = Date.now();
        nvUser.CreatedAt = req.body.CreatedAt;
    
            nvUser.save(function(err, data){
            if(err){
                console.log(err);
    
            }else{
                res.send(data);
            }
        });
    });

    //modification du user
router.put('/users/:id',function(req, res){
    UtilisateurModel.findById({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            data.Username = req.body.Username;
            data.Firstname = req.body.Firstname;
            data.Lastname = req.body.Lastname;
            data.Email = req.body.Email;
            data.Password = req.body.Password;
            data.Avatar= req.body.Avatar;
            req.body.CreatedAt = Date.now();
            data.CreatedAt = req.body.CreatedAt;
            data.save(function(err){
               if(err){ res.send(err)}
               res.send('Mise a jour ok !');
            })
            
           
        }
    });
})


    //partie delete
    //suppression
router.delete('/users/:id',function(req, res){
    UtilisateurModel.remove({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(req.params.id);
            res.send(data);
            console.log("data deleted !");
        }
    });
}),

   //Get users by Id
   router.get('/users/:id',function(req, res){
    UtilisateurModel.findById({ _id: req.params.id},
    function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(req.params.id);
            res.send(data);
            //console.log("data deleted !");
        }
    });
}),
//recuperer tout les users
router.get('/users', function(req, res){
    UtilisateurModel.find(function(err, data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
})

module.exports = router;