import { dbConect } from '../../../utils/mongoose';
import Task from '../../../Models/platos'   

dbConect()

export default async function platos(req,res) {

   switch(req.method){
     case "GET":
      const Platos= await Task.find();
      return res.status(200).json(Platos);

      default:
        return res.status(400).json({msg:"no es el metodo"});


   }

  }
   