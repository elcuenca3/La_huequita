import { dbConect } from '../../../../utils/mongoose';
import Catalogo from '../../../../Models/catalogo';

dbConect();


export default async(req, res) => {
    const { method, body, query: { catalogo } } = req;
    switch (method) {
        case "GET":
            console.log(catalogo);
            const getCatalogo = await Catalogo.find(catalogo)
            if (!getCatalogo) return res.status(404).json({ msg: "no hay catalogo" })
            return res.status(200).json(getCatalogo)

        case "PUT":
        case "DELETE":
        default:
            return res.status(400).json({ msg: "metodo no soportado " })
            break;

    }
}