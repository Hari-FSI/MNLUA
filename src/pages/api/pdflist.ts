import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {

	const query = req.query;
    const { tid } = query;
	console.log(tid);
	const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/pdf-list/${tid}`;
console.log(baseURL);
	try {
		// write data to a file, database, or other storage mechanism
		axios.get(baseURL).then((response) => {
			return res.status(200).json({ pdf: response.data });
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to write data" });
	}
}
