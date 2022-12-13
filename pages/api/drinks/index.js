import dbConnect from "../../../util/mongo";
import Drink from "../../../models/Drink";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if(method === "GET"){
        try{
            const drinks = await Drink.find();
            res.status(200).json(drinks);
        }catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    }

    if(method === "POST"){
        try{
            const drink = await Drink.create(req.body);
            res.status(201).json(drink);
        } catch(err) {
            res.status(500).json(err)
        }
    }
}
