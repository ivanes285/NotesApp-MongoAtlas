/*Este archivo es el principal y servirá para arrancar la app*/

require('dotenv').config(); //Si existe un archivo .env lo lee y va asigar los valores de la variable de entorno
const app = require("./server"); //Requerimos a nuestro servidor
require('./database')  //Requerimos a nuestra bdd para que se ejecute



//Ejecutamos nuestro servidor 
app.listen(app.get('port'), ()=>{
    console.log("Server listenign on port ", app.get('port'))
});
