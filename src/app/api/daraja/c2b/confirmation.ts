// pages/api/c2b/confirmation.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process transaction
    // Update account balance, fulfill order, etc.
    // Send appropriate response
    console.log(req.body);
    res.status(200).json({ result: "success" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
