import axios from "axios";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export const getVisitors = async (id: string) => {
	console.log("getPost id:", id);
	const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/form/${id}`

	try {
		const response = await axios.get(baseURL);
		//console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}

	
};

export const postVisitors = async (id: number) => {
	console.log("getPost idffffffffffffffffffffffffffffffffffffffffffffffffffff:", id);
	const counter = id + 1;

	const config = {
		headers: {
			"Content-Type": "application/vnd.api+json",
			Accept: "application/vnd.api+json",
			Authorization: "Basic YXBpOmFwaQ==",

		},
		auth: {
			username: "admin",
			password: "admin",
		},
	};


	const nodeData = {
		"data": {
		  "type": "node--article",
		  "id": "692ce63e-343f-4bc5-9fff-07694eca30e8",
		  "attributes": {
			"title": "Visitors Counter : Dont Delete this",
			"body": {
				"value": counter,
				"format": "plain_text",
				"summary": "Updated summary"
			  }
		  }
		}
	  };

	const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/form/692ce63e-343f-4bc5-9fff-07694eca30e8`

	try {
		const response = await axios.patch(baseURL, nodeData, config);
		//console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}

	
};




type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	const id = '692ce63e-343f-4bc5-9fff-07694eca30e8';
	const data = await getVisitors(id)
	console.log(data.data.attributes.body)
	const bodyData = data.data.attributes.body[0].value;
	console.log(bodyData)
	// Access the value and remove any HTML tags
const rawValue = bodyData.replace(/<\/?[^>]+(>|$)/g, "");
// Convert the value to a number
const numberValue = parseInt(rawValue);

//const stringValue = numberValue.toString();
postVisitors(numberValue)
  res.status(200).json({ name: rawValue })
}
