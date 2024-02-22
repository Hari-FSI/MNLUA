import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
  }

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
  ) {
	
	if (req.method == "POST") {
		//res.status(405).send({ message: "Only POST requests allowed" });
		return;
	} else {
		const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/cat_form_submission_stats`;

		try {
			let program: number = 0;
			const query = req.query;
			console.log('query ========' )
			console.log( query)
	program = Number(query.program);
	console.log('program ========' + program)
			// write data to a file, database, or other storage mechanism
			axios.get(baseURL).then((response) => {

				const text = response.data[0].body[0];

				const myArray = text.split(",");
				console.log(myArray);

				myArray[program - 1] = parseInt(myArray[program - 1]) + 1;
				const commaSeparatedString = myArray.join(", ");
				console.log(commaSeparatedString);
				const seats = myArray[program - 1];
				postStats(commaSeparatedString)

				console.log(myArray)

				const responseData: Data = { name: response.data[0].body };
        return res.status(200).json(responseData);
			/* 	return res
					.status(200)
					.json({ data: response.data[0].body }); */
			});
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Failed to write data" } as any);
		/* 	return res.status(500).json({ message: "Failed to write data" }); */
		}
	}

	// the rest of your code
}



export const postStats = async (commaSeparatedString: String) => {
	
	

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
		  "id": "a676a7cf-44f0-438e-ae24-0bf7974e7a85",
		  "attributes": {
			"title": "Dont Delete :  CAT Application Form Stats",
			"body": {
				"value": commaSeparatedString,
				"format": "plain_text",
				"summary": "Updated summary"
			  }
		  }
		}
	  };

	const baseURL = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/article/a676a7cf-44f0-438e-ae24-0bf7974e7a85`

	try {
		const response = await axios.patch(baseURL, nodeData, config);
		
		//console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}

	
};
