/*En este archivo vamos a crear nuesro servidor con express*/

const express = require("express");
const exphbs = require("express-handlebars");  //requiro el motor de plantillas 
const path = require("path");

//Inicializacion
const app = express();

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "./views")); //Estableces la ruta de views porque esta dentro de src y no la reconoce

app.engine(".hbs",exphbs({ //configuracion de handlebars
    defaultLayout: "main", //como vamos a tener algunas plantillas con este definimos que este es por defecto la que se va a ejecutar
    layoutsDir: path.join(app.get("views"), "layouts"), //definimos la direccion de layouts
    partialsDir: path.join(app.get("views"), "partials"), // definimos la direccion de partials
    extname: ".hbs", //Con esto definimos que voy a ocupar la extencion corta de handlebars que es hbs
  })
);

app.set("view engine", ".hbs"); //Con esto nosotros le estamos diciendo que va a utlizar el motor de plantillas que se configuro anteriormente

// Middlewares
app.use(express.urlencoded({ extended: false })); //Le dice al servidor que la info que llegue de un formulario lo convierta en un objeto json

//Variables Globales

//Routes
app.get("/", (req, res) => {
  res.render("index"); //Aqui le decimos que ejecute index porque ya hemos establecido que main sea por defecto
});

//Archivos Estaticos
app.use(express.static(path.join(__dirname, "./public"))); //definimos donde se encuentra nuestras archivos a los cuales va accerder nuestro navegador

module.exports = app;
