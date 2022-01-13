import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';
import Plato from '../../../../Models/platos';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo')
    const { id ,categoria  } = req.query
    if(req.method == 'GET'){
        const catalogo = await Catalogo.findById(id)
        const ncat= catalogo.nombre;
        const plato = await Plato.find({categoria: ncat})
             
        //const plato = await Plato.find({nombre: {$eq: 'platotip'}})
        console.log(catalogo.nombre) 
        if (!catalogo) return res.status(404).json({ msg: "no hay catalogo" })
        return res.status(200).json(plato)
    }
}

