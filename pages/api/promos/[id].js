import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";
import Cors from 'cors';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, result => {
        if (result instanceof Error) {
          return reject(result);
        }
  
        return resolve(result);
      });
    });
}

export default async function handler(req, res) {

    await runMiddleware(req, res, cors)

    const { 
        method, 
        query: { id },
    } = req;

    if (method === 'OPTIONS') {
        return res.status(200).json({
        message: "Cors is set"
    })
    }

    await dbConnect()

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
