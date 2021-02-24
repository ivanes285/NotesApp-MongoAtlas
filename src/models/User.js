const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, //De igual forma nos agrega dos campos que son la fecha de creacion y de actualizacion
  }
);

//Mongoose tiene una propiedad que me deja crear metodos en este caso lo hemos nombrado encryptarPassword pero
//puede nombrarse como uno quiera, en este metodo lo que vamos hacer es encriptar las constraseñas

UserSchema.methods.encryptarPassword = async (password) => {
  //salt es un string el cual se va a basar bcryt para encriptar la password, le pasamos el parametro 10 que es por defecto
  //que es el numero de veces que se va a ejecutar el metedo gensalt , miestras mas veces mas segura la psswd
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password,salt); //retorna la contraseña cifrada y es asyncrono 
};

//Este metodo es para verificar la contraseña que ingresa el usuario que es normal con la contraseña cifrada
//que se encuentra en la bdd con la finalidad de autenticar el usuario
UserSchema.methods.matchPassword = async function(password) { //Utilizamos esta manera de declarar funciones no como el metodo de arriba 
 return await bcrypt.compare(password,this.password)           //Con la finalidad de que a travez de this. pueda accerder a las propiedades del objeto
}


module.exports = model("User", UserSchema);
