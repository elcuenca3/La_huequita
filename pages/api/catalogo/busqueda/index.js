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

        case "POST":
            console.log("entre")
            try {
                const newCatalogo = new catalogo(body);
                const savedCatalogo = await newCatalogo.save();
                return res.status(201).json({ success: false, savedCatalogo });

            } catch (error) {
                return res.status(400).json({ error: error.message });

            }

        case "PUT":
        case "DELETE":
            try {
                console.log("entro")
                const deletePlato = await Catalogo.deleteOne({ _id: id });
                if (!deletePlato) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        default:
            return res.status(400).json({ msg: "metodo no soportado " })
            break;

    }
}