import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";

export default async function handler(req, res) {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect()

    if(method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
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

