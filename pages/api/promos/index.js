import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD', "OPTIONS"],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware


export default async function handler(req, res) {

    function runMiddleware(req, res, fn) {
        return new Promise((resolve, reject) => {
          fn(req, res, (result) => {
            if (result instanceof Error) {
              return reject(result)
            }
      
            return resolve(result)
          })
        })
    }
    // Run the middleware
    await runMiddleware(req, res, cors)

    const { method } = req;

    await dbConnect()

    res.header( "Access-Control-Allow-Origin" );

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

