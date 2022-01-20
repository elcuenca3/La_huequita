import { Schema, model, models } from "mongoose";

const platos = new Schema({
    nombre: {
        type: String,
        required: [true, 'title require'],
        unique: true,
        trim: true,
        maxlength: [70, 'title require']
    },
    imagen: {
        type: String,
        required: [true, 'title require'],
        unique: true,
        trim: true,
        maxlength: [200, 'title require']
    },
    categoria: {
        type: Array,
        required: [true, 'ingredientes requeridos'],
        unique: false,
        trim: true,
        maxlength: [50, 'ingredientes requeridos']
    },
    historia: {
        type: String,
        required: [true, 'historia requerida'],
        unique: false,
        trim: true,
        maxlength: [2000, 'historia requerida']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion requerida'],
        unique: false,
        trim: true,
        maxlength: [1000, 'descripcion requerida']
    },
    ingredientes: {
        type: Array,
        required: [true, 'ingredientes requeridos'],
        unique: false,
        trim: true,
        maxlength: [50, 'ingredientes requeridos']
    },
    preparacion: {
        type: Array,
        required: [true, 'title require'],
        unique: false,
        trim: true,
        maxlength: [1000, 'title require']
    },
    lugar: {
        type: String,
        required: [true, 'title require'],
        default: "Desconocido",
        unique: false,
        trim: true,
        maxlength: [50, 'title require']
    },
    huecas: {
        type: Array,
        required: [true, 'title require'],
        unique: false,
        trim: true,
        maxlength: [80, 'title require']



    },
    calorias: {
        type: String,
        required: [true, 'requiere calorias'],
        default: "Desconocido",
        unique: false,
        trim: true,
        maxlength: [50, 'title require']
    }

}, {
    timetamps: true,
    versionkey: false
})

//crear modelo

export default models.Platos || model("Platos", platos);