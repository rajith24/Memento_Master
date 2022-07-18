const express = require("express");
const app = express();
const cors = require("cors");
// const multer = require('multer')
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

require('dotenv/config');
const{MongoClient}=require("mongodb")
require("dotenv").config({ path: "./config.env" });
// const ImageModel=require("./model")
const port = process.env.PORT || 5000;
app.use(cors());
// app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }))
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
let db;
var router = express.Router();
const axios = require('axios');
app.use(express.urlencoded({ extended: true }));
let loggedUser = ""
//storage
// const Storage = multer.diskStorage({
//    destination:'uploads',
//    filename: (req,file,cb) =>{
//       cb(null, file.originalname);
//    }
// });

// const fileStorageEngine = multer.diskStorage({
//    destination : (req,file,cb)=>{
//       cb(null,'./images')
//    },
//    filename: (req, file, cb) =>{
//       cb(null, Date.now() + "--"+ file.originalname)
//    },
// })
// const upload = multer({
//    storage:fileStorageEngine
// })

// app.post("/signup",upload.single("image"),(req,res)=>{
//    // console.log(req.body);
//    res.send("sucessfully uploaded")
//    db.collection("userdetails").insert(req.body).then((user)=>{
//        res.json(user)
//    })
// })
var mongoose = require('mongoose');
var imgModel = require('./model');

var obj = {
   name: "",
   desc: "",
   img: {}
}

mongoose.connect("mongodb+srv://rajithrahul:Ironman24@cluster0.rzq0zbs.mongodb.net/Memento?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true }, err => {
       console.log('connected')
   });


var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
   //  filename: (req, file, cb) => {
   //      cb(null, file.fieldname + '-' + Date.now())
   //  }
    filename: (req, file, cb) => {
      cb(null, 'test' + '-' + Date.now())
  }
});
  
var upload = multer({ storage: storage });

app.get('/', (req, res) => {
   imgModel.find({}, (err, items) => {
       if (err) {
           console.log(err);
           res.status(500).send('An error occurred', err);
       }
       else {
           res.render('imagesPage', { items: items });
       }
   });
});

app.post('/', upload.single('image'), (req, res, next) => {
   obj = {
      //  name: req.body.name,
      //  desc: req.body.desc,
       img: {
           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
           contentType: 'image/png'
       }
   }

   // console.log(obj)

   imgModel.create(obj, (err, item) => {
       if (err) {
           console.log(err);
       }
       else {
           // item.save();
           console.log("2")
         //   res.redirect('/');
       }
   });
});

app.post('/signup',(req, res, next) => {
   var result = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      file: req.body.file,
      image : req.body.image
   }
   // console.log(result)
    db.collection("userdetails").insertOne(result).then((user)=>{
      res.json(user)
    })
});

// app.post("/signup",(req,res)=>{
//    //  console.log(req.body)
//    //  upload(req,res,(err)=>{
//    //    if(err){
//    //       console.log(err)
//    //    }
//    //    else{
//    //       const newImage = new ImageModel({
//    //          image: {
//    //             data:req.file.filename,
//    //             contentType:"image/png"
//    //          }
//    //       })
//    //       newImage.save()
//    //       .then(()=>res.send("sucessfully uploaded"))
//    //       .catch(err=>console.log(err))
//    //    }
//    // })
//     db.collection("userdetails").insert(req.body).then((user)=>{
//         res.json(user)
//     })
//  })

 app.post("/loggedIn",(req,res)=>{
    // console.log(req.body)
    loggedUser = req.body.name
 })

 app.get("/loginDetails",async(req,res)=>{
    const all=await db.collection("userdetails").find().toArray()
    // console.log(all)
    res.status(200).json(all)

 })

 app.get("/loggedUserName",async(req,res)=>{
    res.status(200).json(loggedUser)

 })
app.post('/upload',(req,res)=>{


})






async function start(){
    const client = new MongoClient("mongodb+srv://rajithrahul:Ironman24@cluster0.rzq0zbs.mongodb.net/Memento?retryWrites=true&w=majority")
    await client.connect()
    db=client.db();
    const collections = await db.listCollections().toArray();
    console.log(collections);
    app.listen(5000,()=>{console.log("connection listening on 5000")})
}
start()
