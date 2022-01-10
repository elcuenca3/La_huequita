import { dbConect } from '../../../utils/mongoose';
import Plato from '../../../Models/platos'
import hueca from '../../../Models/huecas'

dbConect();

export default async function platos(req, res) {

    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const Platos = await Plato.find();
                return res.status(200).json(Platos);
                const huecas = await hueca.find();
                return res.status(200).json(huecas);
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