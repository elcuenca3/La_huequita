import {Schema,model,models} from "mongoose";

const platos= new Schema({
    title:{
        type: String,
        required:[true,'title require'],
        unique:true,
        trim: true,
        maxlength: [50,'title require']
    }

},{
    timetamps:true,
    versionkey:false
})

//crear modelo

export default models.Platos ||  model("Platos",platos);

