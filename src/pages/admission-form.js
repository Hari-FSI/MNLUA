import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/AdmissionForm/AdmissionTopMenu";
import Modal from "../Components/Modal";
import axios from "axios";
import AdmissionTopMenu from "../Components/AdmissionForm/AdmissionTopMenu";

function Admission({ posts }) {
	const [modal, setModal] = useState(false);
	console.log(posts);
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const courseRef = useRef();
	const stateRef = useRef();
	const cityRef = useRef();
	const agreeRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setModal(true);
		const formData = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			course: courseRef.current.value,
			state: stateRef.current.value,
			city: cityRef.current.value,
			agree: agreeRef.current.value,
			type: "Admission Form",
		};

		console.log(formData);
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = JSON.stringify(formData);

		try {
			await axios.post("/api/sendEmail", { name, email, message });
			//setIsSent(true);
		} catch (error) {
			console.error("Error sending email:", error);
		}

		try {
			const response = await fetch("/api/saveForm", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const data = await response.json();
				setModal(true);
				console.log(data.message); // Form saved successfully!
			} else {
				console.log("Form submission failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	if (modal) {
		return (
			<>
				{" "}
				<Modal /> Thank you. You will contact with you very soon
			</>
		);
	}

	return (
		<>
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
			<div
				className="page-bannar"
				style={{
					backgroundImage: "url(/images/banner.webp)",
					backgroundPosition: "bottom center",
				}}>
				<div className="header-overlay" />
				<div className="container">
					<span className="bottom-bar" />
				</div>
			</div>

			<section className="page-content-sec">
				{/* <AdmissionTopMenu /> */}
				<AdmissionTopMenu />
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							{" "}
							<div
								className="admission-form"
								dangerouslySetInnerHTML={{
									__html: posts.data.attributes.body[0].value,
								}}
							/>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="content-area section contact-form">
								<h3 className="section-header">Admission Enquiry</h3>
								<form onSubmit={handleSubmit}>
									<div className="col-md-6 col-sm-6 no-padding-left">
										<input
											className="form-control"
											name="cf-name"
											placeholder="Name (Required)"
											type="text"
											ref={nameRef}
										/>
									</div>
									<div className="col-md-6 col-sm-6 no-padding-right">
										<input
											className="form-control"
											placeholder="Email"
											type="email"
											ref={emailRef}
										/>
										<div
											data-lastpass-icon-root="true"
											style={{
												position: "relative !important",
												height: "0px !important",
												width: "0px !important",
												float: "left !important",
											}}
										/>
									</div>
									<div className="col-md-6 col-sm-6 no-padding-left">
										<input
											className="form-control"
											type="text"
											placeholder="Phone"
											ref={phoneRef}
										/>
									</div>
									<div className="col-md-6 col-sm-6 no-padding-right">
										<select
											className="form-control"
											placeholder="Select Course"
											ref={courseRef}>
											<option value={0}>Select Course</option>
											<optgroup label="UG Courses">
												<option value="B.A.LL.B. (Hons.)">
													B.A.LL.B. (Hons.)
												</option>
												<option value="B.B.A.LL.B.(Hons.)">
													B.B.A.LL.B.(Hons.)
												</option>
											</optgroup>
											<optgroup label="PG Courses">
												<option value="LL.M.">LL.M.</option>
												<option value="MA (Allied Courses)">
													MA (Allied Courses)
												</option>
												<option value="MBA (Law &amp; Management)">
													MBA (Law &amp; Management)
												</option>
											</optgroup>
											<optgroup label="Post Doc">
												<option value="Ph.D">Ph.D.</option>
												<option value="LL.D">LL.D.</option>
											</optgroup>
										</select>
									</div>
									<div className="clearfix" />
									<div className="col-md-6 col-sm-6 no-padding-left">
										<select
											id="state"
											className="form-control"
											ref={stateRef}
											placeholder="State">
											{" "}
											<option value={0}>Select State</option>
											<option value="AN">Andaman and Nicobar Islands</option>
											<option value="AP">Andhra Pradesh</option>
											<option value="AR">Arunachal Pradesh</option>
											<option value="AS">Assam</option>
											<option value="BR">Bihar</option>
											<option value="CH">Chandigarh</option>
											<option value="CT">Chhattisgarh</option>
											<option value="DN">Dadra and Nagar Haveli</option>
											<option value="DD">Daman and Diu</option>
											<option value="DL">Delhi</option>
											<option value="GA">Goa</option>
											<option value="GJ">Gujarat</option>
											<option value="HR">Haryana</option>
											<option value="HP">Himachal Pradesh</option>
											<option value="JK">Jammu and Kashmir</option>
											<option value="JH">Jharkhand</option>
											<option value="KA">Karnataka</option>
											<option value="KL">Kerala</option>
											<option value="LA">Ladakh</option>
											<option value="LD">Lakshadweep</option>
											<option value="MP">Madhya Pradesh</option>
											<option value="MH">Maharashtra</option>
											<option value="MN">Manipur</option>
											<option value="ML">Meghalaya</option>
											<option value="MZ">Mizoram</option>
											<option value="NL">Nagaland</option>
											<option value="OR">Odisha</option>
											<option value="PY">Puducherry</option>
											<option value="PB">Punjab</option>
											<option value="RJ">Rajasthan</option>
											<option value="SK">Sikkim</option>
											<option value="TN">Tamil Nadu</option>
											<option value="TG">Telangana</option>
											<option value="TR">Tripura</option>
											<option value="UP">Uttar Pradesh</option>
											<option value="UT">Uttarakhand</option>
											<option value="WB">West Bengal</option>
										</select>
									</div>
									<div className="col-md-6 col-sm-6 no-padding-right">
										<input
											className="form-control"
											type="text"
											ref={cityRef}
											placeholder="City"
										/>
									</div>
									<div className="col-md-12 no-padding">
										<label htmlFor="vehicle1">
											{" "}
											<input
												type="checkbox"
												id="agreement"
												name="agreement"
												ref={agreeRef}
												required
												style={{
													height: "auto",
													margin: "-2px 0 0px 0",
													display: "inline-block",
												}}
											/>
											I agree to receive information regarding my submitted
											application by signing up on MNLUA University*
										</label>
										<br />
										<input
											type="hidden"
											id="custId"
											name="custId"
											value="Admission Form"
										/>
										<button
											className="submit btn btn-style1"
											type="submit"
											data-toggle="modal"
											data-target="#success-pop">
											SUBMIT
										</button>
										<div
											className="alert alert-success"
											role="alert"
											style={{ display: "none" }}>
											Thank you. You will contact with you very soon
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Admission;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/	f1714273-cdf2-4f79-8e62-ebcdcf7e5a28`;
	console.log(url);
	const res = await fetch(url);
	const posts = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
		revalidate: 100, // Rebuild the page every 1 second to check for updates
	};
}
