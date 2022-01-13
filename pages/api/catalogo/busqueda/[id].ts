import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo')
    const { id } = req.query
    if(req.method == 'GET'){
        console.log([{id}])
        const catalogo = await Catalogo.findById(id)
        console.log(catalogo)

        if (!catalogo) return res.status(404).json({ msg: "no hay catalogo" })
        return res.status(200).json(catalogo)
    }
}