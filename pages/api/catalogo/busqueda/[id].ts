import { NextApiRequest, NextApiResponse } from "next";
import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';
import Plato from '../../../../Models/platos';


dbConect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    console.log('Obteneindo catalo')
    const { id ,categoria  } = req.query
    if(req.method == 'GET'){
        const catalogo = await Catalogo.findById(id)
        const ncat= catalogo.nombre;
        const plato = await Plato.find({categoria: ncat})
             
        //const plato = await Plato.find({nombre: {$eq: 'platotip'}})
        if (!catalogo) return res.status(404).json({ msg: "no hay catalogo" })
        return res.status(200).json(plato)
    }
    if(req.method=='DELETE'){
      console.log("quiere borrar")
        try {
            console.log("borro")
            const deletePlato = await Catalogo.deleteOne({ _id: id });
            if (!deletePlato) {
              return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: {} });
          } catch (error) {
            console.log("fallo")
            res.status(400).json({ success: false });
          }
    }
}

