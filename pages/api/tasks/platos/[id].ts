import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Plato from '../../../../Models/platos';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo')
    const { id } = req.query
    if(req.method == 'GET'){
        const plato = await Plato.findById(id)
      

        if (!plato) return res.status(404).json({ msg: "no hay plato" })
        return res.status(200).json(plato)
    }
}