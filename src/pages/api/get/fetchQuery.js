export default async function handler(req, res1) {
	const { arg } = req.query;

	let fetchstore1 = `https://${process.env.API_URL}/${arg}`;

	const res = await fetch(fetchstore1);
	const data = await res.json();

	res1.status(200).json({ data });
}
