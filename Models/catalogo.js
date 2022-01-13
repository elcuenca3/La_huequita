import { Schema, model, models } from "mongoose";

const catalogo = new Schema({
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
    }

}, {
    timetamps: true,
    versionkey: false
})

//crear modelo

export default models.catalogo || model("catalogo", catalogo);