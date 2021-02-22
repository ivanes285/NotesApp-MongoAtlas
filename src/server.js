/*En este archivo vamos a crear nuesro servidor con express*/

const express = require("express");
const path = require("path");

//Inicializacion
const app = express();


// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname,"./views")); //Estableces la ruta de views porque esta dentro de src y no la reconoce


// Middlewares
 app.use(express.urlencoded({extended: false})) //Le dice al servidor que la info que llegue de un formulario lo convierta en un objeto json


//Variables Globales


//Routes
app.get('/',(req, res)=>{
  res.send("hello world")
})

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'./public'))) //definimos donde se encuentra nuestras archivos a los cuales va accerder nuestro navegador


module.exports = app;
