import axios from "axios";

export default async function handler(req, res) {
	const token = await getCSRF();
	console.log(token);

	if (req.method === "POST") {
		const formData = req.body;
		const {
			ProgramAppliedFor,
			ApplicationNumber,
			email,
			Income,
			Mobile,
			Aadhar,
			AddressCorrespondence,
			AddressPermanent,
			Birthdate,
			CandidateName,
			Category,
			CategoryDocument,
			Domicile,
			DomicileDocument,
			FatherContact,
			FatherEmail,
			FatherName,
			FatherOccupation,
			Gender,
			GraduationBoard,
			GraduationDocument,
			GraduationGrade,
			GraduationMI,
			GraduationPercentage,
			GraduationSCURed,
			GraduatiosYOP,
			MotherContact,
			MotherEmail,
			MotherName,
			MotherOccupation,
			Nationality,
			ProfilePicture,
			SignatureDocument,
			TenthBoard,
			TenthDocument,
			TenthGrade,
			TenthMI,
			TenthPercentage,
			TenthSCURed,
			TenthYOP,
			TwelfthBoard,
			TwelfthDocument,
			TwelfthGrade,
			TwelfthMI,
			TwelfthPercentage,
			TwelfthSCURed,
			TwelfthYOP,
		} = req.body;

		console.log(ProgramAppliedFor, Income, Mobile, Aadhar);
		console.log(
			"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
		);
		console.log(formData);
		const data = {
			data: {
				type: "node--cat_application",
				attributes: {
					title: "CAT Form Submission",
					field_application_number: {
						value: ApplicationNumber,
					},
					field_aadhar_number: {
						value: Aadhar,
					},
					field_emailid: {
						value: email,
					},
					field_mobile_no: {
						value: Mobile,
					},
					field_gender: {
						value: Gender,
					},
					field_nationality: {
						value: Nationality,
					},
					field_annual_income: {
						value: Income,
					},
					field_candidate_image: {
						value: ProfilePicture,
					},
					field_declaration_signature: {
						value: SignatureDocument,
					},
					field_caste_document_upload: {
						value: CategoryDocument,
					},
					field_domicile_document_upload: {
						value: DomicileDocument,
					},
					field_class_10_details_upload: {
						value: TenthDocument,
					},

					field_class_10_grade_point: {
						value: TenthGrade,
					},
					field_class_10_medium_of_instruc: {
						value: TenthMI,
					},
					field_class_10_school_college_un: {
						value: TenthBoard,
					},
					field_class_10_score_percentage: {
						value: TenthPercentage,
					},
					field_class_10_year_of_passing: {
						value: TenthYOP,
					},

					field_class_10_2_grade_point: {
						value: TwelfthGrade,
					},
					field_class_10_2_medium_of_instr: {
						value: TwelfthMI,
					},
					field_class_10_2_school_college: {
						value: TwelfthBoard,
					},
					field_class_10_2_year_of_passing: {
						value: TwelfthYOP,
					},
					field_class_10_2_details_upload: {
						value: TwelfthDocument,
					},
					field_class_10_2_score_percentag: {
						value: TwelfthPercentage,
					},

					field_graduation_details_upload: {
						value: GraduationDocument,
					},
					field_graduation_grade_point: {
						value: GraduationGrade,
					},
					field_graduation_medium_of_instr: {
						value: GraduationMI,
					},
					field_graduation_school_college_: {
						value: "text",
					},
					field_graduation_score_percentag: {
						value: GraduationPercentage,
					},
					field_graduation_year_of_passing: {
						value: GraduatiosYOP,
					},

					field_address_for_correspondence: {
						value: AddressCorrespondence,
					},
					field_permanent_address: {
						value: AddressPermanent,
					},
					field_date_of_birth: {
						value: Birthdate,
					},
					field_name_of_candidate: {
						value: CandidateName,
					},

					field_state_of_domicile: {
						value: Domicile,
					},

					field_father_contact_no: {
						value: FatherContact,
					},
					field_father_email_id: {
						value: FatherEmail,
					},
					field_father_name: {
						value: FatherName,
					},
					field_father_s_occupation: {
						value: FatherOccupation,
					},

					field_mother_contact_no: {
						value: MotherContact,
					},
					field_mother_email_id: {
						value: MotherEmail,
					},
					field_mother_name: {
						value: MotherName,
					},
					field_mother_occupation: {
						value: MotherOccupation,
					},
				},
			},
		};

		//const { name, email, phone, course,state, city  } = req.body;

		// Log the form data
		console.log("Form data:", formData);
		// Handle form submission
		postData(
			`https://${process.env.API_URL}/jsonapi/node/cat_application`,
			data,
			token
		).then((data) => {
			//console.log(data); // JSON data parsed by `data.json()` call
			res.status(200).json(data);
		});

		//res.status(200).json({ message: "Form saved successfully!" });
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
