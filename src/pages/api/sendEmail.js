import nodemailer from "nodemailer";

export default async function handler(req, res) {
	function formatJSON(json) {
		let result = "";
		for (let key in json) {
			result +=
				key.charAt(0).toUpperCase() + key.slice(1) + ": " + json[key] + "\n";
		}
		return result;
	}

	if (req.method === "POST") {
		const { message, email } = req.body;
		const obj = JSON.parse(message);
		//console.log(obj);
		const type = obj.type + " ";
		const formattedMessage = formatJSON(obj);
		try {
			// Create a transporter object with your email service provider's SMTP configuration
			const transporter = nodemailer.createTransport({
				host: process.env.SMTP_HOST, // Replace with your SMTP server address
				port: parseInt(process.env.SMTP_PORT || "2525"), // Replace with your SMTP server port
				secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
				auth: {
					user: process.env.SMTP_USER || "user",
					pass: process.env.SMTP_PASSWORD || "password",
				},
			});

			await transporter.sendMail({
				from: "noreply@mnlua.ac.in", // Replace with your email address
				to: "project1@flyingstars.co", // Replace with the recipient email address
				//to: "kshama@drupaltechie.com", // Replace with your email address
				//to: "abhijeet@drupaltechie.com", // Replace with the recipient email address
				subject: type + "  submission on MNLU",
				text: `
          ${formattedMessage}
        `,
			});

			if (email) {
				await transporter.sendMail({
					from: "noreply@mnlua.ac.in", // Replace with your email address
					to: email, // Replace with the recipient email address
					//to: "abhijeet@drupaltechie.com", // Replace with the recipient email address
					subject: type + "  submission on MNLU",
					text: `Dear Applicant,\nYour ${type} has been submitted successfully and we will be getting back to you as soon as possible.
			`,
				});
			}

			res.status(200).json({ message: "Email sent successfully" });
		} catch (error) {
			console.error("Error sending email:", error);
			res
				.status(500)
				.json({ error: "An error occurred while sending the email" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
}
