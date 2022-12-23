const cors = require('cors');

exports.handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://pizza-ordering-pmstpyka3-mamabear25.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Add your code here to handle the request and set the response
};