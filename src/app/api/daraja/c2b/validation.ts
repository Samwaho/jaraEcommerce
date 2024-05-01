// pages/api/c2b/validation.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Validate transaction details
    // If valid, return 200 status code
    console.log(res, req, "validation");

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
    console.log("validation");
  }
}
