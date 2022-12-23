import nc from "next-connect";
import cors from "cors";
import axios from "axios";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res) => {
    const product = await axios.get(remoteServerUrl, config);
    res.json(product);
  });

export default handler;