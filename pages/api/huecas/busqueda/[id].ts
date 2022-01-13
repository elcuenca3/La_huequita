import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Hueca from '../../../../Models/huecas';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo')
    const { nombre } = req.query

    if(req.method == 'GET'){
        const huecas = await Hueca.find({nombre})
        console.log(huecas)

        if (!huecas) return res.status(404).json({ msg: "no hay huecas" })
        return res.status(200).json(huecas)
    }
}