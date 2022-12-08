import dbConnect from "../../../util/mongo";
import Burger from "../../../models/Burger";

export default async function handler(req, res) {
    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect()

    if(method === "GET"){
        try{
            const burger = await Burger.findById(id);
            res.status(200).json(burger);
        }catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    }

    if(method === "PUT"){
        try{
            const burger = await Burger.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(burger);
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "DELETE"){
        try{
            await Burger.findByIdAndDelete(id)
            res.status(200).json("product deleted successfully!");
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

