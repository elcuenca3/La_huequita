import { dbConect } from '../../../utils/mongoose';
import nextConnect from 'next-connect';
import middleware from '../../../middlewares-register';
import fs from 'fs'
import path from 'path'
import Catalogo from '../../../Models/catalogo'
dbConect();

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req: any, res: any) => {
    try {
        const file = req.files
        const body = req.body
        const oldpath = file.file.filepath;

        const relativePath = __dirname.split('\\');
        relativePath.splice(-4)
        if (!fs.existsSync(path.join(relativePath.join('\\'), 'public', 'uploads'))) {
            fs.mkdirSync(path.join(relativePath.join('\\'), 'public', 'uploads'))
        }
        const currentTime = new Date().getTime().toString()
        const newPath = path.join(relativePath.join('\\'), 'public', 'uploads', currentTime + file.file.originalFilename)
        fs.renameSync(oldpath, newPath)
        const newCatalogo = new Catalogo({...body, imagen: `/uploads/${currentTime+file.file.originalFilename}` });
        const savedCatalogo = await newCatalogo.save();
        return res.status(201).json(savedCatalogo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});


handler.get(async(req: any, res: any) => {
    try {
        const Catalogos = await Catalogo.find();
        return res.status(200).json(Catalogos);

    } catch (error) {
        return res.status(500).json({ error });

    }
})


export const config = {
    api: {
        bodyParser: false,
    },
}

export default handler;