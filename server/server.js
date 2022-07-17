const express = require("express");
const app = express();
const cors = require("cors");
// const multer = require('multer')
const{MongoClient}=require("mongodb")
require("dotenv").config({ path: "./config.env" });
// const ImageModel=require("./model")
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
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
// const upload = multer({
//    storage:Storage
// }).single("image")

app.post("/signup",(req,res)=>{
    console.log(req.body)
   //  upload(req,res,(err)=>{
   //    if(err){
   //       console.log(err)
   //    }
   //    else{
   //       const newImage = new ImageModel({
   //          image: {
   //             data:req.body.image,
   //             contentType:"image/png"
   //          }
   //       })
   //       newImage.save()
   //       .then(()=>res.send("sucessfully uploaded"))
   //       .catch(err=>console.log(err))
   //    }
   // })
    db.collection("userdetails").insert(req.body).then((user)=>{
        res.json(user)
    })
 })

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
