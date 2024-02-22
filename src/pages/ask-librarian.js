import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";
import Modal from "../Components/Modal";
import axios from "axios";
function Admission({ posts }) {
	const [modal, setModal] = useState(false);
	console.log(posts);
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const idRef = useRef();
	const messageRef = useRef();
	const agreeRef = useRef();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setModal(true);
		const formData = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			id: idRef.current.value,
			message: messageRef.current.value,
			agree: agreeRef.current.value,
			type: "ASK A LIBRARIAN FORM ",
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
				<h2 className="form_success">
					{" "}
					<Modal /> Thank you. You will contact with you very soon
				</h2>
			</>
		);
	}
	return (
		<div>
			<style jsx>{`
				.section-header {
					display: block;
					background: #f7f3ec;
					width: 100%;
					padding: 6px 12px;
					margin: 0 0 10px 0;
					color: #41679c;
					font-size: 22px;
					font-weight: 500;
					text-transform: uppercase;
					line-height: 28px;
					letter-spacing: 0px;
				}
				.contact-form input,
				.contact-form textarea {
					font-size: 14px;
					background: #e8e8e8;
					border: 0;
					margin-bottom: 30px;
				}
			`}</style>
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

			<TopMenu />

			<section className="page-content-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9 ask_librarian">
							<h3 className="section-header">ASK A LIBRARIAN</h3>
							<form onSubmit={handleSubmit}>
								<div className="col-md-6 col-sm-6 no-padding-left">
									<input
										className="form-control"
										name="cf-name"
										placeholder="Name of User"
										type="text"
										ref={nameRef}
									/>
								</div>
								<div className="col-md-6 col-sm-6 no-padding-right">
									<input
										className="form-control"
										placeholder="Email of User"
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
										ref={idRef}
										placeholder="ID No."
									/>
									{/* City */}
								</div>
								<div className="col-md-6 col-sm-6 no-padding-right">
									<input
										className="form-control"
										type="text"
										placeholder="Mobile No."
										ref={phoneRef}
									/>
								</div>
								<textarea
									id="message"
									class="form-control"
									rows="7"
									cols="30"
									name="message"
									minlength="4"
									ref={messageRef}
									placeholder="Message"></textarea>

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
			</section>

			<Footer />
		</div>
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
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/f5291cce-e184-43d5-99cc-834304eb255e`;
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
