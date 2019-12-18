var express = require('express');
var router = express.Router();
let request = require("async");
var mongoose = require('../Models/bdd')
var userModel = require('../Models/user')
var shopModel = require('../Models/shop')
var uid2 = require("uid2"); 
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Sign in */
router.get('/sign-in',async function(req, res, next) {

  var isUserExist = false;

  console.log('email from front',req.query)

  // All the user from the database with the email from the front will be stored in data
  const user = await userModel.findOne({
    email:req.query.email
  })

  // We are checking it there is a user or not 
  if(data){
    console.log('We found a user --> ', data)
    isUserExist = true;
    
  }else{
    console.log('There is no user with this email !')
    isUserExist = false
  }

  if(!user){        
    res.json({result:true,isUserExist:false})      
  } else{        
    var hash = SHA256(req.query.password + user.salt).toString(encBase64);     
    if(hash === user.password){            
      res.json({result:true,isUserExist:true})
      console.log("hash -->", hash)     
    }else{      
     res.json({result:true,isUserExist:false})    
    }  
  }
});

/* POST Sign up */
router.post('/sign-up', async function(req, res, next) {

  console.log('data from front', req.body)
  var salt = uid2(32);
  const newUser = new userModel({

    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    salt : salt,
    password: SHA256(req.body.password + salt).toString(encBase64),
    token: uid2(32)

  })

  const saveUser = await newUser.save()

  console.log('New user in database -->',newUser )

  res.json({result:true,newUser});
  
});

router.get('/activites',  function(req, res, next){
  shopModel.find(
    function(err, shops){
  console.log("---> lists des shops",shops)
  res.json(shops)
 })
 
})

router.get('/activites/Alimentation',  function(req, res, next){
  shopModel.find(
    {category:"Alimentation"},
    function(err, shops){
  console.log("---> lists des shops Alimentaire",shops)
  res.json(shops)
 })
 
})


router.get('/activites/AMAP',  function(req, res, next){
  shopModel.find(
    {category:"AMAP"},
    function(err, shops){
  console.log("---> lists des shops AMAP",shops)
  res.json(shops)
 })
 
})


router.get('/activites/PAP',  function(req, res, next){
  shopModel.find(
    {category:"Prêt-à-porter"},
    function(err, shops){
  console.log("---> lists des shops PAP",shops)
  res.json(shops)
 })
 
})

router.get('/activites/Cari',  function(req, res, next){
  shopModel.find(
    {category:"Caritatif"},
    function(err, shops){
  console.log("---> lists des shops Cari",shops)
  res.json(shops)
 })
 
})

router.get('/activites/Recy',  function(req, res, next){
  shopModel.find(
    {category:"Recyclage"},
    function(err, shops){
  console.log("---> lists des shops Recy",shops)
  res.json(shops)
 })
 
})

router.get('/activites/AB',  function(req, res, next){
  shopModel.find(
    {category:"Activités bénévoles"},
    function(err, shops){
  console.log("---> lists des shops AB",shops)
  res.json(shops)
 })
 
})

router.post('/newAct', async function(req, res, next) {
  console.log('data from front', req.body)

  const newShop = new shopModel({
    category: req.body.category,
    name: req.body.name,
    address: req.body.address,
    zipCode: req.body.zipCode,
    city: req.body.city,
    phone: req.body.phone,
    Desc: req.body.Desc,
    pictures:req.body.pictures
  })

  const saveShop = await newShop.save()

  console.log('new shop here!!', newShop)

  res.json({result: true,newShop})
})



module.exports = router;

