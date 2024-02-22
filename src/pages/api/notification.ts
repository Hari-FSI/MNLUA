import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/4e66d96f-66b0-46aa-8bef-1432381f2be2`;

	try {
		// write data to a file, database, or other storage mechanism
		axios.get(baseURL).then((response) => {
			return res.status(200).json({ notification: response.data.data.attributes.field_link });
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to write data" });
	}
}
