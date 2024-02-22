import axios from "axios";

export default async function handler(req, res) {
	const token = await getCSRF();
	console.log(token);

	if (req.method === "POST") {
		const formData = req.body;
		const data = {
			data: {
				type: "node--form",
				attributes: {
					title: "Form Submission",
					body: {
						value: JSON.stringify(formData),
						format: "plain_text",
					},
				},
			},
		};

		//const { name, email, phone, course,state, city  } = req.body;

		// Log the form data
		console.log("Form data:", formData);
		// Handle form submission
		postData(
			`https://${process.env.API_URL}/jsonapi/node/form`,
			data,
			token
		).then((data) => {
			//console.log(data); // JSON data parsed by `data.json()` call
			res.status(200).json(data);
		});

		res.status(200).json({ message: "Form saved successfully!" });
	} else {
		// Invalid method used
		res.status(200).json({ message: token });
		//res.status(405).json({ message: "Method Not Allowed" });
	}
}

const getCSRF = async () => {
	let sessionUrl = "https://" + `${process.env.API_URL}` + "/session/token";
	console.log(sessionUrl);
	try {
		const response = await axios.get(sessionUrl);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

async function postData(url = "", data, token) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.

		headers: {
			"Content-Type": "application/vnd.api+json",
			"X-CSRF-Token": token,
			Accept: "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},

		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	const datajson = await response.json(); // parses JSON response into native JavaScript objects
	//console.log(datajson)
	return datajson;
}
