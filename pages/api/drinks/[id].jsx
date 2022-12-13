import dbConnect from "../../../util/mongo";
import Drink from "../../../models/Drink";

export default async function handler(req, res) {
    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect()

    if(method === "GET"){
        try{
            const drink = await Drink.findById(id);
            res.status(200).json(drink);
        }catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    }

    if(method === "PUT"){
        try{
            const drink = await Drink.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(drink);
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "DELETE"){
        try{
            await Drink.findByIdAndDelete(id)
            res.status(200).json("product deleted successfully!");
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

