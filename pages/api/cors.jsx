// import React from 'react';
// import Cors from 'cors';

// // Initializing the cors middleware
// // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// const cors = Cors({
//   methods: ['POST', 'GET', 'HEAD'],
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, result => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }

// const ApiHandler = () => {
//   const [response, setResponse] = useState({});

//   useEffect(() => {
//     async function handleRequest(req, res) {
//       // Run the middleware
//       await runMiddleware(req, res, cors);

//       // Rest of the API logic
//       setResponse({ message: 'Hello Everyone!' });
//     }
//   }, []);

//   return <div>{response.message}</div>;
// };

// export default ApiHandler;



// // import { NextApiRequest, NextApiResponse } from 'next'
// // import Cors from 'cors'

// // // Initializing the cors middleware
// // const cors = Cors({
// //   methods: ['POST', 'GET', 'HEAD', 'OPTIONS'],
// //   }
// // );

// // // Helper method to wait for a middleware to execute before continuing
// // // And to throw an error when an error happens in a middleware
// // function runMiddleware(req, res, fn) {
// //     return new Promise((resolve, reject) => {
// //       fn(req, res, (result) => {
// //         if (result instanceof Error) {
// //           return reject(result)
// //         }
  
// //         return resolve(result)
// //       })
// //     })
// // }

// // export default async function handler(
// //     req = NextApiRequest,
// //     res = NextApiResponse
// //   ) {
// //     // Run the middleware
// //     await runMiddleware(req, res, cors)
  
// //     // Rest of the API logic
// //     res.json({ message: 'Hello Everyone!' })
// //     console.log(res)
// // }


