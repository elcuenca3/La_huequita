import { dbConect } from '../../../../utils/mongoose';

import huecas from '../../../../Models/huecas';

dbConect();


export default async(req, res) => {
    const { method, body, query: { hueca } } = req;
    switch (method) {
        case "GET":
            console.log(hueca);
            const gethueca = await huecas.findById(hueca)
            if (!gethueca) return res.status(404).json({ msg: "no hay huecas" })
            return res.status(200).json(gethueca)

        case "PUT":
        case "DELETE":
        default:
            return res.status(400).json({ msg: "metodo no soportado " })
            break;

    }
}