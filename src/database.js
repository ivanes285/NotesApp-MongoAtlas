/*Este archivo tendra la coneccion de nuestra BDD*/

const mongoose = require("mongoose");

//Esta es una alternativa
// const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;
// const NOTES_APP_MONGODB_DATABASE = process.env.NOTES_APP_MONGODB_DATABASE;

//Utilizando ECM6
const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE}= process.env;

const MONDODB_URI=`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

mongoose.connect(MONDODB_URI,{useUnifiedTopology: true,useNewUrlParser: true,'useCreateIndex': true})
.then(db => console.log("Database is connected"))
.catch(error=> console.log("Error", error)) 

   