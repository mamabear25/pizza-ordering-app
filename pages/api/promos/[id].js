import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";

export default async function handler(req, res) {
    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect()

    if(method === 'OPTIONS') {
        return res.status(200).json(
            { message: "OK" })
    }

    if(method === "GET"){
        try{
            const promo = await Promo.findById(id);
            res.status(200).json(promo);
        }catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    }

    if(method === "PUT"){
        try{
            const promo = await Promo.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(promo);
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "DELETE"){
        try{
            await Promo.findByIdAndDelete(id)
            res.status(200).json("product deleted successfully!");
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

