import React, { useState, useRef, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AadharInput from "../Components/AadharInput";
import Image from "next/image";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import PublitioAPI from "publitio_js_sdk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Tenders() {
	const router = useRouter();
	let today = new Date();

	let date =
		today.getDate() +
		"/" +
		parseInt(today.getMonth() + 1) +
		"/" +
		today.getFullYear();

	const [verfied, setVerfied] = useState(false);

	const [aadhar, setAadhar] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errormsg, setErrormsg] = useState();

	const programRef = useRef();

	const nameRef = useRef();
	const genderRef = useRef();
	const dobRef = useRef();
	const mobileRef = useRef();
	const emailRef = useRef();

	const fnameRef = useRef();
	const foccupationRef = useRef();
	const fcontactRef = useRef();
	const femailRef = useRef();
	const mnameRef = useRef();
	const moccupationRef = useRef();
	const mcontactRef = useRef();
	const memailRef = useRef();
	const nationalityRef = useRef();
	const categoryRef = useRef();
	const categoryDocumentRef = useRef();
	const domicileRef = useRef();
	const domicileDocumentRef = useRef();
	const addressCorrespondenceRef = useRef();
	const addressPermanentRef = useRef();
	const incomeRef = useRef();
	const signatureDocumentRef = useRef();

	const tenthYOPRef = useRef();
	const tenthSCURed = useRef();
	const tenthMIRef = useRef();
	const tenthPercentageRef = useRef();
	const tenthGradeRef = useRef();
	const tenthBoardRef = useRef();
	const tenthDocumentRef = useRef();

	const twelfthYOPRef = useRef();
	const twelfthSCURed = useRef();
	const twelfthMIRef = useRef();
	const twelfthPercentageRef = useRef();
	const twelfthGradeRef = useRef();
	const twelfthBoardRef = useRef();
	const twelfthDocumentRef = useRef();

	const graduatiosYOPRef = useRef();
	const graduatiosSCURed = useRef();
	const graduatiosMIRef = useRef();
	const graduatiosPercentageRef = useRef();
	const graduatiosGradeRef = useRef();
	const graduatiosBoardRef = useRef();
	const graduatiosDocumentRef = useRef();

	const profilePictureRef = useRef();

	/****  File upload codes */
	const [thumbnal, setThumbnal] = useState("/images/180.png");
	const [mailsent, setMailsent] = useState(false);
	const [signatureImg, setSignatureImg] = useState("/images/150x40.png");
	const [profilePicture, setProfilePicture] = useState(null);
	const [signature, setSignature] = useState(null);
	const [categoryCertificate, setCategoryCertificate] = useState(null);
	const [domicileCertificate, setDomicileCertificate] = useState(null);
	const [tenthCertificate, setTenthCertificate] = useState(null);
	const [twelfthCertificate, setTwelfthCertificate] = useState(null);
	const [graduationCertificate, setGraduationCertificate] = useState(null);
	const [uploadedProfilePictureUrl, setUploadedProfilePictureUrl] =
		useState(null);
	const [uploadedSignatureUrl, setUploadedSignatureUrl] = useState(null);
	const [uploadedCategoryCertificateUrl, setUploadedCategoryCertificateUrl] =
		useState(null);
	const [uploadedDomicileCertificateUrl, setUploadedDomicileCertificateUrl] =
		useState(null);
	const [uploadedTenthCertificateUrl, setUploadedTenthCertificateUrl] =
		useState(null);
	const [uploadedTwelfthCertificateUrl, setUploadedTwelfthCertificateUrl] =
		useState(null);
	const [
		uploadedGraduationCertificateUrl,
		setUploadedGraduationCertificateUrl,
	] = useState(null);

	const handleProfilePictureChange = (event) => {
		setThumbnal(URL.createObjectURL(event.target.files[0]));
		handleFileChange(event, setProfilePicture);
	};

	const handleSignatureChange = (event) => {
		setSignatureImg(URL.createObjectURL(event.target.files[0]));
		handleFileChange(event, setSignature);
	};

	const handleCategoryCertificateChange = (event) => {
		console.log(event.target.files[0]);
		handleFileChange(event, setCategoryCertificate);
	};

	const handleDomicileCertificateChange = (event) => {
		handleFileChange(event, setDomicileCertificate);
	};

	const handleTenthCertificateChange = (event) => {
		handleFileChange(event, setTenthCertificate);
	};

	const handleTwelfthCertificateChange = (event) => {
		handleFileChange(event, setTwelfthCertificate);
	};

	const handleGraduationCertificateChange = (event) => {
		handleFileChange(event, setGraduationCertificate);
	};

	const handleFileUpload = async () => {
		const uploadPromises = [];

		if (profilePicture) {
			const url = await uploadFile(
				profilePicture,
				setUploadedProfilePictureUrl
			);
			console.log(url);
			profilePictureRef.current.value = url;
			uploadPromises.push(url);
		}
		if (signature) {
			uploadPromises.push(uploadFile(signature, setUploadedSignatureUrl));
		}
		if (categoryCertificate) {
			uploadPromises.push(
				uploadFile(categoryCertificate, setUploadedCategoryCertificateUrl)
			);
		}
		if (domicileCertificate) {
			uploadPromises.push(
				uploadFile(domicileCertificate, setUploadedDomicileCertificateUrl)
			);
		}
		if (tenthCertificate) {
			uploadPromises.push(
				uploadFile(tenthCertificate, setUploadedTenthCertificateUrl)
			);
		}
		if (twelfthCertificate) {
			uploadPromises.push(
				uploadFile(twelfthCertificate, setUploadedTwelfthCertificateUrl)
			);
		}
		if (graduationCertificate) {
			uploadPromises.push(
				uploadFile(graduationCertificate, setUploadedGraduationCertificateUrl)
			);
		}

		Promise.all(uploadPromises)
			.then(() => {
				console.log("All files uploaded successfully");
				// Handle success
			})
			.catch((error) => {
				console.error("Error uploading files:", error);
				// Handle error
			});
	};
	const handleFileChange = (event, setFileState) => {
		const file = event.target.files[0];
		if (file && file.size <= 10 * 1024 * 1024) {
			setFileState(file);
		} else {
			setFileState(null);
			console.log("File size exceeds the limit (10MB).");
		}
	};
	//write async function handleSuccess. This will be executed after form submission. save node and send email
	const handleSuccess = async (formData) => {
		console.log(formData);

		try {
			const response = await fetch("/api/saveFormCAT", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const data = await response.json();
				//setModal(true);
				//setIsSubmitting(false);

				const message = JSON.stringify(formData);
				//await axios.post("/api/sendEmail", { message });

				axios
					.post("/api/sendEmail", {
						message,
					})
					.then(function (response) {
						//setMailsent(true);
						router.push("https://forms.eduqfix.com/bbambaform/add");
					})
					.catch(function (error) {
						console.error("Error sending email:", error);
					});

				//setIsSent(true);

				console.log(data.message); // Form saved successfully!
			} else {
				console.log("Form submission failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}

		//setToken(token);
		//setUser(user);
		//setLoggedIn(true);
		//setLoading(false);
		//setErrorMessage("");
		//setSuccessMessage("Login Successful");
		//redirect to home page
		//navigate("/");
	};

	useEffect(() => {
		if (mailsent) {
			router.push("https://forms.eduqfix.com/bbambaform/add");
		}
		//Runs only on the first render
	}, [mailsent]);

	const handleSubmit1 = async (event) => {
		event.preventDefault();
		//notify();
		console.log(thumbnal);

		console.log(programRef.current?.value);
		console.log(signatureDocumentRef.current?.value);
		if (!verfied) {
			setErrormsg("Please verify you are a human");
		} else if (thumbnal == "/images/180.png") {
			toast("Profile picture is required");
		} else if (programRef.current?.value == "NA") {
			toast("Program applied for is required");
		} else if (signatureImg == "/images/150x40.png") {
			toast("Signature is required");
		} else {
		}
	};

	//Publitio api to upload files
	const uploadFile = async (file, setUploadedUrlState, field = "") => {
		console.log("uploading file");
		console.log(file);
		const publitio = new PublitioAPI(
			"Gab28ewSXjhvtk0NVlZa",
			"1hcvZ0tpa6tSg75x17B2Rqqn8XGQLhDn"
		);
		const api_url = publitio.uploadUrlSigned();

		const formData = new FormData();
		formData.append("file", file);

		return axios
			.post(api_url, formData, {
				headers: {
					Accept: "application/json",
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				const url = response.data.url_download;
				console.log(response.data);
				setUploadedUrlState(url);
				if (field == "profilePicture") {
					setCookie("profilePicture", url);

					profilePictureRef.current = url;
					setUploadedProfilePictureUrl(url);
					console.log("url =" + url);
				} else if (field == "signature") {
					setCookie("signature", url);
				} else if (field == "tenthCertificate") {
					setCookie("tenthCertificate", url);
				} else if (field == "twelfthCertificate") {
					setCookie("twelfthCertificate", url);
				} else if (field == "graduationCertificate") {
					setCookie("graduationCertificate", url);
				} else if (field == "signatureDocument") {
					setCookie("signatureDocument", url);
				} else if (field == "categoryCertificate") {
					setCookie("categoryCertificate", url);
				} else if (field == "domicileCertificate") {
					setCookie("domicileCertificate", url);
				}

				//setUploadedUrls((prevUrls) => [...prevUrls, url]);
				return url;
			})
			.catch((error) => {
				console.error(error);
				// Handle the error
				throw error;
			});
	};

	const [programStats, setProgramStats] = useState(0);

	const handleSubmit = async (event) => {
		event.preventDefault();
		let programVal = 0;
		switch (programRef.current?.value) {
			case "Five Years BBA-MBA Integrated Programme (Law & Management)":
				programVal = 1;
				break;
			case " Two Years Executive MBA (Financial Services and Court Administration)":
				programVal = 2;
				break;
			case "Two Years M.A. Public Policy":
				programVal = 3;
				break;
			case "Two Years Executive M.A. (Law, Forensic Science and Technology)":
				programVal = 4;
				break;
			case "Two Years Executive MBA (Medical Laws & Hospital Management)":
				programVal = 5;
				break;
			case "Two Years Executive MBA (Law of Financial Services and Financial Technology)":
				programVal = 6;
				break;
			case "One Year Post-Graduate Diploma in Water Law, Policy and Governance":
				programVal = 7;
				break;
			default:
			// code block
		}
		//notify();
		console.log(programStats);
		console.log(uploadedProfilePictureUrl);

		console.log(programRef.current?.value);
		console.log(signatureDocumentRef.current?.value);

		if (!verfied) {
			setErrormsg("Please verify you are a human");
		} else if (thumbnal == "/images/180.png") {
			toast("Profile picture is required");
		} else if (programRef.current?.value == "NA") {
			toast("Program applied for is required");
		} else if (signatureImg == "/images/150x40.png") {
			toast("Signature is required");
		} else if (nameRef.current?.value == "") {
			toast("Name is required");
		} else if (emailRef.current?.value == "") {
			toast("Email is required");
		} else if (mobileRef.current?.value == "") {
			toast("Mobile is required");
		} else {
			axios.get(`api/catForm?program=${programVal}`).then((response) => {
				const text = response.data.name[0];
				const myArray = text.split(",");
				console.log(myArray);

				myArray[programVal - 1] = parseInt(myArray[programVal - 1]) + 1;
				const commaSeparatedString = myArray.join(", ");
				console.log(commaSeparatedString);
				const seats = myArray[programVal - 1];

				setCookie("applicationNumber", seats);
			});

			setIsSubmitting(true);
			setErrormsg(null);
			const uploadPromises = [];

			if (profilePicture) {
				uploadPromises.push(
					uploadFile(
						profilePicture,
						setUploadedProfilePictureUrl,
						"profilePicture"
					)
				);

				/* const url = uploadFile(profilePicture, setUploadedProfilePictureUrl);
				console.log(url);
				profilePictureRef.current = url;
				uploadPromises.push(url); */
			}
			if (signature) {
				uploadPromises.push(
					uploadFile(signature, setUploadedSignatureUrl, "signature")
				);
			}
			if (categoryCertificate) {
				uploadPromises.push(
					uploadFile(
						categoryCertificate,
						setUploadedCategoryCertificateUrl,
						"categoryCertificate"
					)
				);
			}
			if (domicileCertificate) {
				uploadPromises.push(
					uploadFile(
						domicileCertificate,
						setUploadedDomicileCertificateUrl,
						"domicileCertificate"
					)
				);
			}
			if (tenthCertificate) {
				uploadPromises.push(
					uploadFile(
						tenthCertificate,
						setUploadedTenthCertificateUrl,
						"tenthCertificate"
					)
				);
			}
			if (twelfthCertificate) {
				uploadPromises.push(
					uploadFile(
						twelfthCertificate,
						setUploadedTwelfthCertificateUrl,
						"twelfthCertificate"
					)
				);
			}
			if (graduationCertificate) {
				uploadPromises.push(
					uploadFile(
						graduationCertificate,
						setUploadedGraduationCertificateUrl,
						"graduationCertificate"
					)
				);
			}

			Promise.all(uploadPromises)
				.then(() => {
					const profileurl = getCookie("profilePicture");
					const signatureurl = getCookie("signature");
					const categoryCertificateurl = getCookie("categoryCertificate");
					const domicileCertificateurl = getCookie("domicileCertificate");
					const tenthCertificateurl = getCookie("tenthCertificate");
					const twelfthCertificateurl = getCookie("twelfthCertificate");
					const graduationCertificateurl = getCookie("graduationCertificate");
					const application = getCookie("applicationNumber");

					console.log("All files uploaded successfully");
					console.log(uploadedProfilePictureUrl);
					console.log(profilePictureRef.current?.value);
					console.log(profileurl);

					// Handle success

					const formData = {
						ApplicationNumber: application,
						ProgramAppliedFor: programRef.current?.value,
						ProfilePicture: profileurl,
						CandidateName: nameRef.current?.value,
						Gender: genderRef.current?.value,
						Birthdate: dobRef.current?.value,
						Mobile: mobileRef.current?.value,
						email: emailRef.current?.value,
						Aadhar: aadhar,
						FatherName: fnameRef.current?.value,
						FatherOccupation: foccupationRef.current?.value,
						FatherContact: fcontactRef.current?.value,
						FatherEmail: femailRef.current?.value,
						MotherName: mnameRef.current?.value,
						MotherOccupation: moccupationRef.current?.value,
						MotherContact: mcontactRef.current?.value,
						MotherEmail: memailRef.current?.value,
						Nationality: nationalityRef.current?.value,
						Category: categoryRef.current?.value,
						CategoryDocument: categoryCertificateurl,
						Domicile: domicileRef.current?.value,
						DomicileDocument: domicileCertificateurl,
						AddressCorrespondence: addressCorrespondenceRef.current?.value,
						AddressPermanent: addressPermanentRef.current?.value,
						Income: incomeRef.current?.value,
						SignatureDocument: signatureDocumentRef.current?.value,
						TenthYOP: tenthYOPRef.current?.value,
						TenthSCURed: tenthSCURed.current?.value,
						TenthMI: tenthMIRef.current?.value,
						TenthPercentage: tenthPercentageRef.current?.value,
						TenthGrade: tenthGradeRef.current?.value,
						TenthBoard: tenthBoardRef.current?.value,
						TenthDocument: tenthCertificateurl,
						TwelfthYOP: twelfthYOPRef.current?.value,
						TwelfthSCURed: twelfthSCURed.current?.value,
						TwelfthMI: twelfthMIRef.current?.value,
						TwelfthPercentage: twelfthPercentageRef.current?.value,
						TwelfthGrade: twelfthGradeRef.current?.value,
						TwelfthBoard: twelfthBoardRef.current?.value,
						TwelfthDocument: twelfthCertificateurl,
						GraduatiosYOP: graduatiosYOPRef.current?.value,
						GraduationSCURed: graduatiosSCURed.current?.value,
						GraduationMI: graduatiosMIRef.current?.value,
						GraduationPercentage: graduatiosPercentageRef.current?.value,
						GraduationGrade: graduatiosGradeRef.current?.value,
						GraduationBoard: graduatiosBoardRef.current?.value,
						GraduationDocument: graduationCertificateurl,
						SignatureDocument: signatureurl,
						type: "Admission Form",
					};

					handleSuccess(formData);
				})
				.catch((error) => {
					console.error("Error uploading files:", error);
					// Handle error
				});
		}
	};

	function onChange(value) {
		// console.log("Captcha value:", value);
		setVerfied(true);
	}

	return (
		<>
			<style jsx>{`
				.reCaptchaWapper {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 25px auto;
				}
				.application-form-sec form fieldset .aadhar_nu {
					width: 24.5px;
					float: left;
					margin-right: 1px;
					float: left;
					margin-right: 1px;
				}

				.application-form-sec form fieldset .aadhar_nu input {
					padding: 2px 6px;
					min-height: 24px;
					line-height: 26px;
					height: 26px;
				}

				.application-form-sec form fieldset .toggle-password {
					position: absolute;
					right: 15px;
					top: 4px;
				}

				.application-form-sec form select.form-control {
					min-height: 46px;
					background: #fff;
				}
				.input-group-btn .file-upload-btn input {
					position: absolute;
					left: 0;
					opacity: 0;
					width: 100%;
				}
				#tab_logic tbody tr td {
					font-size: 14px;
				}
				#tab_logic tbody tr td input {
					font-size: 14px;
				}
				.input-group {
					position: relative;
					display: table;
					border-collapse: separate;
				}

				.input-group .form-control:first-child,
				.input-group-addon:first-child,
				.input-group-btn:first-child > .btn,
				.input-group-btn:first-child > .btn-group > .btn,
				.input-group-btn:first-child > .dropdown-toggle,
				.input-group-btn:last-child
					> .btn:not(:last-child):not(.dropdown-toggle),
				.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				}

				.application-form-sec form input.form-control {
					min-height: 46px;
				}

				.input-group-btn {
					position: relative;
					font-size: 0;
					white-space: nowrap;
				}

				.application-form-sec form .input-group-btn:last-child > .btn,
				.application-form-sec form .input-group-btn:last-child > .btn-group {
					height: 46px;
				}

				.input-group-btn:last-child > .btn,
				.input-group-btn:last-child > .btn-group {
					margin-left: -1px;
				}
				.btn-block #signature {
					position: absolute;
					left: 25%;
					opacity: 0;
					cursor: pointer;
				}

				.application-form-sec form .file-upload {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
					cursor: pointer;
				}

				.application-form-sec form .file-upload-btn {
					color: #333;
				}

				.form-control[disabled],
				.form-control[readonly],
				fieldset[disabled] .form-control {
					cursor: not-allowed;
					background-color: #eee;
					opacity: 1;
				}

				.btn-style1 {
					margin-right: 0px;
					background: #4b4082;
					padding: 4px 10px;
				}

				.application-form-sec form .submit {
					width: 200px;
					padding: 10px;
					background: #fa8620;
					margin: 20px auto;
					outline: none;
					color: #fff;
				}

				.application-form-sec.detail-blk h2.in-heading {
					font-size: 30px;
					line-height: 34px;
				}

				.application-form-sec.detail-blk h3.in-heading {
					font-size: 24px;
					line-height: 28px;
				}

				.application-form-sec form h3.in-heading {
					color: #003a6a;
				}
			`}</style>

			<div>
				<Head>
					<title>MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD</title>
					<meta
						name="description"
						content="MNLUA – MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header />
				<section className="page-content-sec">
					<div className="container">
						<div className="row">
							<div className="detail-blk application-form-sec ">
								<div className="col-md-12 text-center">
									{" "}
									uploadedProfilePictureUrl = {uploadedProfilePictureUrl}
									<br></br>
									<h2 className="in-heading">
										MNLUA Common Admission Test (M-CAT)
									</h2>
									<h3 className="in-heading">Application Form </h3>
								</div>
								<div className="clearfix"></div>
								<div className="col-md-12">
									<div style={{ "margin-bottom": "10px" }}>
										(<b>Note:</b> These are self-financed Programmes. The
										University follows the State Government of Maharashtra’s
										reservation policy for admitting students. However, State
										Government of Maharashtra scholarships are not available.
										The students have to bear themselves the entire
										expenditures).
									</div>
								</div>

								<form onSubmit={handleSubmit}>
									<div className="col-md-3 pull-right">
										<div className="photo-upload-sec">
											<div className="register_profile_image"></div>
											<div className="text-center" style={{ width: "100%" }}>
												<Image
													id="imagePreview"
													className="photograph"
													src={thumbnal}
													width="180"
													height="180"
													alt="Preview Image"
												/>
											</div>

											<p className="small">
												Candidate's recent passport size colour photograph
											</p>
											<label
												for="imageUpload"
												className="btn btn-block btn-style1">
												<input
													type="file"
													id="profilePicture"
													accept="image/*"
													onChange={handleProfilePictureChange}
												/>
											</label>
										</div>
									</div>
									<div className="col-md-9 pull-right">
										<fieldset className="form-group">
											<select
												className="form-control"
												id="programme"
												name="programme"
												required=""
												ref={programRef}>
												<option
													value="NA"
													selected="selected"
													disabled="disabled">
													Programme Applied for
												</option>
												<option value="Five Years BBA-MBA Integrated Programme (Law &amp; Management)">
													Five Years BBA-MBA Integrated Programme (Law &
													Management)
												</option>
												<option value=" Two Years Executive MBA (Financial Services and Court Administration)">
													Two Years MBA (Financial Services and Court
													Administration)
												</option>
												<option value="Two Years M.A. Public Policy">
													Two Years M.A. Public Policy
												</option>
												<option value="Two Years Executive M.A. (Law, Forensic Science and Technology)">
													Two Years Executive M.A. (Law, Forensic Science and
													Technology)
												</option>
												<option value="Two Years Executive MBA (Medical Laws &amp; Hospital Management)">
													Two Years Executive MBA (Medical Laws &amp; Hospital
													Management)
												</option>
												<option value="Two Years Executive MBA (Law of Financial Services and Financial Technology)">
													Two Years Executive MBA (Law of Financial Services and
													Financial Technology)
												</option>
												<option value="One Year Post-Graduate Diploma in Water Law, Policy and Governance">
													One Year Post-Graduate Diploma in Water Law, Policy
													and Governance
												</option>
											</select>
										</fieldset>
										<h3 className="in-heading">
											(Kindly fill all the columns in Capital Letters)
										</h3>
										<div className="row">
											<fieldset className="form-group col-md-6">
												<input
													type="text"
													className="form-control"
													placeholder="Name of Candidate"
													id="name"
													name="name"
													ref={nameRef}
												/>
												<p className="small">
													(As mentioned in the 10+2Certificate){" "}
												</p>
											</fieldset>
											<fieldset className="form-group col-md-6">
												<select
													className="form-control"
													id="gender"
													name="gender"
													ref={genderRef}>
													<option
														value=""
														selected="selected"
														disabled="disabled">
														Select Gender
													</option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
												</select>
											</fieldset>
											<div className="clearfix"></div>
											<fieldset className="form-group col-md-6">
												<div
													className="input-group date"
													data-date-format="dd.mm.yyyy">
													<input
														type="text"
														className="form-control"
														id="dob"
														name="dob"
														placeholder="Date of Birth (DD.MM.YYYY)"
														ref={dobRef}></input>
													<div className="input-group-addon">
														<span className="glyphicon glyphicon-th"></span>
													</div>
												</div>
											</fieldset>
											<fieldset className="form-group col-md-6">
												<input
													type="text"
													className="form-control"
													id="mobile"
													name="mobile"
													placeholder="Mobile No"
													ref={mobileRef}></input>
											</fieldset>
											<fieldset className="form-group col-md-6">
												<input
													type="email"
													className="form-control"
													placeholder="Email ID"
													id="email"
													name="email"
													ref={emailRef}
												/>
											</fieldset>
											<fieldset className="form-group col-md-6">
												<lable> Please enter the Aadhar Number </lable>
												<div className="clearfix"></div>
												<AadharInput setAadhar={setAadhar} />
											</fieldset>
										</div>
									</div>

									<div className="clearfix"></div>
									<fieldset className="form-group col-md-3">
										<input
											type="text"
											className="form-control"
											id="father_name"
											name="father_name"
											placeholder="Father's Name"
											ref={fnameRef}
										/>
									</fieldset>

									<fieldset className="form-group col-md-3">
										<select
											className="form-control"
											id="father_occupation"
											name="father_occupation"
											ref={foccupationRef}>
											<option value="" selected="selected" disabled="disabled">
												Father's Occupation
											</option>
											<option value="Salaried">Salaried</option>
											<option value="Business">Business</option>
											<option value="Self-Employed">Self-Employed</option>
										</select>
									</fieldset>

									<fieldset className="form-group col-md-3">
										<input
											type="text"
											className="form-control"
											id="father_mobile"
											name="father_mobile"
											placeholder="Contact Nos.(Land Line/Mobile)"
											ref={fcontactRef}
										/>
									</fieldset>
									<fieldset className="form-group col-md-3">
										<input
											type="email"
											className="form-control"
											id="father_email"
											name="father_email"
											placeholder="Email ID"
											ref={femailRef}
										/>
									</fieldset>
									<div className="clearfix"></div>
									<fieldset className="form-group col-md-3">
										<input
											type="text"
											className="form-control"
											id="mother_name"
											name="mother_name"
											placeholder="Mother's Name"
											ref={mnameRef}
										/>
									</fieldset>
									<fieldset className="form-group col-md-3">
										<select
											className="form-control"
											id="mother_occupation"
											name="mother_occupation"
											ref={moccupationRef}>
											<option value="" selected="selected" disabled="disabled">
												Mother's Occupation
											</option>
											<option value="Salaried">Salaried</option>
											<option value="Business">Business</option>
											<option value="Self-Employed">Self-Employed</option>
										</select>
									</fieldset>
									<fieldset className="form-group col-md-3">
										<input
											type="text"
											className="form-control"
											placeholder="Contact Nos.(Land Line/Mobile)"
											id="mother_mobile"
											name="mother_mobile"
											ref={mcontactRef}
										/>
									</fieldset>
									<fieldset className="form-group col-md-3">
										<input
											type="email"
											className="form-control"
											placeholder="Email ID"
											id="mother_email"
											name="mother_email"
											ref={memailRef}
										/>
									</fieldset>

									<div className="clearfix"></div>
									<fieldset className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											placeholder="Nationality"
											id="nationality"
											name="nationality"
											ref={nationalityRef}
										/>
									</fieldset>
									<div className="clearfix"></div>
									<fieldset className="form-group col-md-6">
										<select
											className="form-control"
											id="category"
											name="category"
											onchange="documentOptional()"
											ref={categoryRef}>
											<option value="" selected="selected" disabled="disabled">
												Category{" "}
											</option>
											<option value="Open">Open</option>
											<option value="SC/ST">SC/ST</option>
											<option value="OBC">OBC</option>
											<option value="Specially Abled Person">
												Specially Abled Person
											</option>
											<option value="EWS">EWS</option>
											<option value="NT/VJNT">NT/VJNT</option>
										</select>
									</fieldset>
									<fieldset className="form-group col-md-6">
										<div className="input-group">
											<input
												type="text"
												className="form-control file-upload-text"
												disabled="true"
												placeholder="Document upload"
												name="domicile_document_name"
												id="domicile_document_name"
											/>
											<span className="input-group-btn">
												<label
													type="button"
													className="btn btn-default file-upload-btn">
													Browse...
													<input
														type="file"
														id="categoryCertificate"
														accept=".pdf"
														onChange={handleCategoryCertificateChange}
													/>
												</label>
											</span>
										</div>
										<p className="small">
											<span style={{ color: "red" }}>*</span> upload caste/
											creamy-layer/ EWS certificate (jpg, png and jpeg) <br />
											<span style={{ color: "red" }}>#</span> Caste validity is
											mandatory at the time of admission
										</p>
									</fieldset>
									<div className="clearfix"></div>

									<fieldset className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											placeholder="State of Domicile"
											id="domicile"
											name="domicile"
											ref={domicileRef}
										/>
									</fieldset>
									<fieldset className="form-group col-md-6">
										<div className="input-group">
											<input
												type="text"
												className="form-control file-upload-text"
												disabled="true"
												placeholder="Document upload"
												name="domicile_document_name"
												id="domicile_document_name"
											/>
											<span className="input-group-btn">
												<label
													type="button"
													className="btn btn-default file-upload-btn">
													Browse...
													<input
														type="file"
														id="domicileCertificate"
														accept=".pdf"
														onChange={handleDomicileCertificateChange}
													/>
												</label>
											</span>
										</div>
										<p className="small">
											if domicile of Maharashtra State (jpg, png and jpeg)
										</p>
									</fieldset>
									<div className="clearfix"></div>
									<fieldset className="form-group col-md-6">
										<textarea
											className="form-control"
											rows="7"
											cols="30"
											name="address_correspondence"
											id="address_correspondence"
											placeholder="Address for Correspondence"
											ref={addressCorrespondenceRef}></textarea>
										<p className="small">
											(With any landmark nearby and pin code)
										</p>
									</fieldset>
									<fieldset className="form-group col-md-6">
										<textarea
											className="form-control"
											rows="7"
											cols="30"
											name="address_permenent"
											id="address_permenent"
											placeholder="Permanent Address"
											ref={addressPermanentRef}></textarea>
										<p className="small">
											(With any landmark nearby and pin code)
										</p>
									</fieldset>
									<div className="clearfix"></div>
									<fieldset className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											placeholder="Annual Income of Family (in INR)"
											id="annual_income"
											name="annual_income"
											ref={incomeRef}
										/>
									</fieldset>
									<div className="clearfix"></div>
									<div className="col-md-12 ">
										<h3 className="in-heading">Educational Details</h3>
									</div>
									<div className="col-md-12 table-responsive">
										<table
											className="table table-bordered table-hover table-sortable"
											id="tab_logic">
											<thead>
												<tr>
													<th rowspan="2" width="200px;">
														<strong>Examinations</strong>
														<strong>Passed</strong>
													</th>
													<th rowspan="2">
														<strong>Year of</strong>
														<strong>Passing</strong>
													</th>
													<th rowspan="2">
														<strong>School/College/</strong>
														<strong>University</strong>
													</th>
													<th rowspan="2">
														<strong>Medium of</strong>
														<strong>Instruction</strong>
													</th>
													<th colspan="2">
														<strong>Score Obtained</strong>
													</th>
													<th>
														<strong>Upload</strong>
													</th>
												</tr>
												<tr>
													<th>
														<strong>% of</strong>
														<strong>Marks</strong>
														<strong>Secured</strong>
													</th>
													<th>
														<strong>Grade</strong>
														<strong>Point</strong>
													</th>
													<th>
														<strong>&nbsp;</strong>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														Class 10<sup>th</sup>
													</td>
													<td>
														<input
															type="text"
															id="sslc_year"
															name="sslc_year"
															placeholder="Year of Passing"
															className="form-control"
															ref={tenthYOPRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="sslc_school"
															name="sslc_school"
															placeholder="School/College/ University"
															className="form-control"
															ref={tenthSCURed}
														/>
													</td>
													<td>
														<input
															type="text"
															id="sslc_medium"
															name="sslc_medium"
															placeholder="Medium of Instruction"
															className="form-control"
															ref={tenthMIRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="sslc_marks"
															name="sslc_marks"
															placeholder="Secured"
															className="form-control"
															ref={tenthPercentageRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="sslc_grade"
															name="sslc_grade"
															placeholder="Point"
															className="form-control"
															ref={tenthGradeRef}
														/>
													</td>
													<td>
														<div className="input-group">
															<input
																type="text"
																className="form-control file-upload-text"
																disabled
																placeholder="Upload"
																id="sslc_document_name"
																name="sslc_document_name"
																ref={tenthBoardRef}
															/>
															<span className="input-group-btn">
																<label
																	type="button"
																	className="btn btn-default file-upload-btn">
																	Browse...
																	<input
																		type="file"
																		id="tenthCertificate"
																		accept=".pdf"
																		onChange={handleTenthCertificateChange}
																	/>
																</label>
															</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>Class 10+2</td>
													<td>
														<input
															type="text"
															id="hsc_year"
															name="hsc_year"
															placeholder="Year of Passing"
															className="form-control"
															ref={twelfthYOPRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="hsc_school"
															name="hsc_school"
															placeholder="School/College/ University"
															className="form-control"
															ref={twelfthSCURed}
														/>
													</td>
													<td>
														<input
															type="text"
															id="hsc_medium"
															name="hsc_medium"
															placeholder="Medium of Instruction"
															className="form-control"
															ref={twelfthMIRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="hsc_marks"
															name="hsc_marks"
															placeholder="Secured"
															className="form-control"
															ref={twelfthPercentageRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="hsc_grade"
															name="hsc_grade"
															placeholder="Point"
															className="form-control"
															ref={twelfthGradeRef}
														/>
													</td>
													<td>
														<div className="input-group">
															<input
																type="text"
																className="form-control file-upload-text"
																disabled
																placeholder="Upload"
																id="hsc_document_name"
																name="hsc_document_name"
															/>
															<span className="input-group-btn">
																<label
																	type="button"
																	className="btn btn-default file-upload-btn">
																	Browse...
																	<input
																		type="file"
																		id="twelfthCertificate"
																		accept=".pdf"
																		onChange={handleTwelfthCertificateChange}
																	/>
																</label>
															</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														Graduation (other than Five Years BBA-MBA Integrated
														Programme in Law and Management)
													</td>
													<td>
														<input
															type="text"
															id="graduation_year"
															name="graduation_year"
															placeholder="Year of Passing"
															className="form-control"
															ref={graduatiosYOPRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="graduation_school"
															name="graduation_school"
															placeholder="School/College/ University"
															className="form-control"
															ref={graduatiosSCURed}
														/>
													</td>
													<td>
														<input
															type="text"
															id="graduation_medium"
															name="graduation_medium"
															placeholder="Medium of Instruction"
															className="form-control"
															ref={graduatiosMIRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="graduation_marks"
															name="graduation_marks"
															placeholder="Secured"
															className="form-control"
															ref={graduatiosPercentageRef}
														/>
													</td>
													<td>
														<input
															type="text"
															id="graduation_grade"
															name="graduation_grade"
															placeholder="Point"
															className="form-control"
															ref={graduatiosGradeRef}
														/>
													</td>
													<td>
														<div className="input-group">
															<input
																type="text"
																className="form-control file-upload-text"
																disabled
																placeholder="Upload"
																id="graduation_document_name"
																name="graduation_document_name"
															/>
															<span className="input-group-btn">
																<label
																	type="button"
																	className="btn btn-default file-upload-btn">
																	Browse...
																	<input
																		type="file"
																		id="graduationCertificate"
																		accept=".pdf"
																		onChange={handleGraduationCertificateChange}
																	/>
																</label>
															</span>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="clearfix"></div>
									<div className="col-md-12 ">
										<h2 className="in-heading text-center">
											DECLARATION Details
										</h2>
										<p>
											I hereby declare that the information furnished above is
											true and correct to the best of my knowledge and belief.
											In case, any information and/or document submitted is
											found to be incorrect/false/forged at any stage after
											admission, I abide by the appropriate action be taken by
											the University including cancellation of admission.
											Further, I also undertake to abide by the Regulations and
											Disciplinary Rules as may be prescribed by the University
											from time to time.
										</p>
									</div>
									<div className="clearfix"></div>
									<div className="row">
										<fieldset className="form-group col-sm-4">
											<label className="control-label col-sm-2" for="email">
												Date:
											</label>
											<div className="col-sm-10">
												{/* <!--<input type="text" className="form-control"  placeholder="Date" id="declaration_date" name="declaration_date" />--> */}
												{date}
											</div>
										</fieldset>
										<fieldset className="col-sm-3 pull-right">
											<div className="photo-upload-sec">
												<Image
													id="imagePreview"
													className="photograph"
													src={signatureImg}
													width="150"
													height="40"
													alt="Preview Image"
												/>
												<p className="small"> Signature </p>
												<label
													for="signature"
													className="btn btn-block btn-style1">
													Browser File...{" "}
													<input
														type="file"
														id="signature"
														accept="image/*"
														onChange={handleSignatureChange}
													/>
												</label>
											</div>
										</fieldset>
									</div>

									<div className="col-md-12 text-center">
										<div className="reCaptchaWapper">
											<ReCAPTCHA
												sitekey="6LdWajEmAAAAAG9NjvX83_83BpxqWFnHAZSS8sTM"
												onChange={onChange}
											/>
										</div>{" "}
										<div className="errormsg">{errormsg}</div>
										<button
											className="submit btn btn-style1"
											type="submit"
											disabled={!verfied && isSubmitting}>
											{isSubmitting ? "Please wait submitting..." : "Submit"}
										</button>
										<Image
											src="/images/loader.gif"
											alt="loader"
											id="loader"
											className="hidden"
											width="30"
											height="30"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<br />
				<br />{" "}
				<div>
					<ToastContainer />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Tenders;
