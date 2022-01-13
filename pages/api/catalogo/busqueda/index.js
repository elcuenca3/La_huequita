import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';



dbConect();


export default async(req, res) => {
    const { method, body, query: { catalogo } } = req;
    switch (method) {
        case "GET":
            const getCatalogo = await Catalogo.find({ nombre })
            if (!getCatalogo) return res.status(404).json({ msg: "no hay catalogo" })
            if (!getPlato) return res.status(404).json({ msg: "no hay plato" })
            return res.status(200).json(getCatalogo)



        case "PUT":
        case "DELETE":
        default:
            return res.status(400).json({ msg: "metodo no soportado " })
            break;

    }
}