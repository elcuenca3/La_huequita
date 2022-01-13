import { dbConect } from '../../../utils/mongoose';
import Catalogo from '../../../Models/catalogo'

dbConect();

export default async function catalogo(req, res) {

    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const catalogos = await Catalogo.find();
                return res.status(200).json(catalogos);

            } catch (error) {
                return res.status(500).json({ error: error.message });

            }
        case "POST":
            try {
                const newPlato = new Plato(body);
                const savedPlato = await newPlato.save();
                return res.status(201).json(savedPlato);

            } catch (error) {
                return res.status(400).json({ error: error.message });

            }

        default:
            return res.status(400).json({ msg: "no es el metodo" });


    }

}