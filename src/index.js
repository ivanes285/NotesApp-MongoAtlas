/*Este archivo es el principal y servirá para arrancar la app*/

const app = require("./server");


//Ejecutamos nuestro servidor 
app.listen(app.get('port'), ()=>{
    console.log("Server listenign on port ", app.get('port'))
});
