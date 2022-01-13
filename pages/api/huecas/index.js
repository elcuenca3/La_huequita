import { dbConect } from '../../../utils/mongoose';
import Hueca from '../../../Models/huecas'


dbConect();

export default async function catalogo(req, res) {

    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const huecas = await Hueca.find();
                return res.status(200).json(huecas);

            } catch (error) {
                return res.status(500).json({ error: error.message });

            }
        case "POST":
            try {
                const newHueca = new Hueca(body);
                const savedHueca = await newHueca.save();
                return res.status(201).json(savedHueca);

            } catch (error) {
                return res.status(400).json({ error: error.message });

            }

        default:
            return res.status(400).json({ msg: "no es el metodo" });


    }

}