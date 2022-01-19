import { dbConect } from '../../../../utils/mongoose';
import Plato from '../../../../Models/platos';

dbConect();


export default async(req, res) => {
    const { method, body, query: { platos } } = req;
    switch (method) {
        case "GET":
            console.log(platos);
            const getPlato = await Plato.findById(platos)
            if (!getPlato) return res.status(404).json({ msg: "no hay plato" })
            return res.status(200).json(getPlato)

        case "POST":

            const postPlato = await Plato.create(body)
            if (!postPlato) return res.status(404).json({ msg: "no se creo el plato" })
            return res.status(201).json(postPlato)



        case "PUT":

        case "DELETE":
        default:
            return res.status(400).json({ msg: "metodo no soportado " })
            break;

    }
}