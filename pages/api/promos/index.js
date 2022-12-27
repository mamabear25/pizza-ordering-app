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
    //  Run the middleware

    await dbConnect()

    await runMiddleware(req, res, cors)

    const { method } = req;

    if(method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
    }

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

