import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;
  const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/designation/${pid}?include=field_image`
  if (req.method === "GET") {
    try {
     
      // write data to a file, database, or other storage mechanism
      axios.get(baseURL).then((response) => {
      
      return res.status(200).json({ message: (response.data) });
      
    });
     
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to write data" });
    }
  } else {
    return res.status(400).json({ message: "Invalid request method" });
  }
}
