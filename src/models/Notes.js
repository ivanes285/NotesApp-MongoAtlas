//Aqui vamos a definir el esquema de las notas que vamos a guardar en la BDD

const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //esta opción o propiedad que se añadío es una de la más utilizadas pues nos añadir
    // automaticamente dos campos que son la fecha de creacion y la fecha de actualización
  }
);

module.exports= model('Note',NoteSchema)