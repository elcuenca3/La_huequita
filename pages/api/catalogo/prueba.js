import { dbConect } from '../../../utils/mongoose';
import Catalogo from '../../../Models/catalogo'

dbConect();

export default async function catalogo(req, res) {

    const { method, body } = req;

    switch (method) {

        case "POST":


            const cate = new Catalogo(body)
            await cate.save();
            return res.status(200).json({ msg: "entro", success: true, cate })

        case "GET":
            try {
                const catalogos = await Catalogo.find();
                return res.status(200).json(catalogos);

            } catch (error) {
                return res.status(500).json({ error: error.message });

            }

        default:
            return res.status(400).json({ msg: "no es el metodo" });


    }

}