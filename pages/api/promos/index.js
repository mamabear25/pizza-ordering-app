import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if(method === "GET"){
        try{
            const promos = await Promo.find();
            res.status(200).json(promos);
        }catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    }

    if(method === "POST"){
        try{
            const promo = await Promo.create(req.body);
            res.status(201).json(promo);
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

