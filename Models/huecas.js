import { Schema, model, models } from "mongoose";

const huecas = new Schema({
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
    logo: {
        type: String,
        required: [true, 'title require'],
        unique: true,
        trim: true,
        maxlength: [200, 'title require']
    },
    descripcion: {
        type: String,
        required: [true, 'title require'],
        unique: true,
        trim: true,
        maxlength: [500, 'title require']
    },
    ubicacion: {
        type: String,
        required: [true, 'title require'],
        unique: true,
        trim: true,
        maxlength: [100, 'title require']
    }

}, {
    timetamps: true,
    versionkey: false
})

//crear modelo

export default models.huecas || model("huecas", huecas);