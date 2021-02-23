/*Este archivo es el principal y servirá para arrancar la app*/

require('dotenv').config(); //Si existe un archivo .env lo lee y va asigar los valores de la variable de entorno
const app = require("./server");
require('./database')



//Ejecutamos nuestro servidor 
app.listen(app.get('port'), ()=>{
    console.log("Server listenign on port ", app.get('port'))
});
