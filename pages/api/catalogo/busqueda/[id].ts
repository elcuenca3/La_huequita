import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';
import Plato from '../../../../Models/platos';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo')
    const { id ,nombre } = req.query
    if(req.method == 'GET'){
        const catalogo = await Catalogo.find({nombre})
        const plato = await Plato.findOne({nombre: catalogo})
        console.log(plato)
        

        console.log(catalogo) 

        if (!catalogo) return res.status(404).json({ msg: "no hay catalogo" })
        return res.status(200).json(catalogo)
    }
}