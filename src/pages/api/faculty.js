import axios from "axios";

export const getPost = async (id) => {
	console.log("getPost id:", id);

	data = await axios
		.get(`/api/faculty/${id}`)
		.then((response) => {
			console.log(
				"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrresponse.data.message"
			);
			console.log(response.data.message);
			//data = response.data.message;
		})
		.catch((err) => console.log(err));
	console.log("fffff getPost data:", data);
	console.log(data);
	return data;
};
