import React, { useRef, useState } from "react";
import Modal from "../Components/Modal";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Contact({ posts }) {
  const [verfied, setVerfied] = useState(false);
  function onChange(value) {
    // console.log("Captcha value:", value);
    setVerfied(true);
  }
  const [modal, setModal] = useState(false);

  //console.log(posts);
  const nameRef = useRef();
  const emailRef = useRef();
  const lnameRef = useRef();

  const subjectRef = useRef();
  const msgRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      lname: lnameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: msgRef.current.value,
      type: "Contact Form",
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
    return <Modal />;
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
          backgroundImage: "url(images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>Contact Us</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      

      {/* <div
				className="contact"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/> */}

      <div className="page-content contact-details-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h3>Contact Us:</h3>
              <span className="bottom-bar"></span>
              <p>
                <strong>
                  Prof. Dr. Dhanaji M. Jadhav
                  <br />
                  Registrar,
                  <br />
                  Maharashtra National Law University, Aurangabad
                  <br />
                  Paithan Road,
                  <br />
                  Kanchanwadi,
                  <br />
                  Aurangabad (MS)-431005
                  <br />
                  E-mail ID:{" "}
                  <a href="mailto:registrar@mnlua.ac.in">
                    registrar@mnlua.ac.in
                  </a>
                </strong>
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <h3>FOR ADMISSIONS 2023-2024:</h3>
              <span className="bottom-bar"></span>
              <p>
                <strong>
                  Ms. Neha Tripathi, Contact No:
                  <a href="tel:+91 6205407873">+91 6205407873</a>
                </strong>
                <br />
                <strong>
                  Mr. K. Vinay Kumar , Contact No:{" "}
                  <a href="tel:+91 6303210863">+91 6303210863</a>
                </strong>
                <br />
                {/* <!--<strong>Mr. Prafulla Lele, Contact No: <a href="tel:+91 8087781300">+91 8087781300</a></strong><br />--> */}
                <strong>
                  Dr. Kumar Saurabh, Contact No :{" "}
                  <a href="tel:+91 85276 10911">+91 85276 10911</a>
                </strong>
                <br />
                <strong>
                  E-mail ID:{" "}
                  <a href="mailto:admissions2023@mnlua.ac.in">
                    admissions2023@mnlua.ac.in
                  </a>
                </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h3>Moot Court Association (MCA):</h3>
              <span className="bottom-bar"></span>
              <p>
                <strong>
                  Ms. Neha Tripathi
                  <br />
                  Faculty Convenor
                  <br />
                  <br />
                  E-mail ID:{" "}
                  <a href="mailto:neha.tripathi@mnlua.ac.in">
                    neha.tripathi@mnlua.ac.in
                  </a>
                  <br />
                  E-mail ID:{" "}
                  <a href="mailto:mca@mnlua.ac.in">mca@mnlua.ac.in</a>
                  <br />
                  Instituted in 2017, the MCA is a recognized Cell of the
                  University.
                  <br />
                  The Moot Court Society 2019-20 consists of the following
                  persons:
                  <br />
                </strong>
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <h3>Internship and Placement Cell:</h3>
              <span className="bottom-bar"></span>
              <p>
                <strong>
                  Ms. Sakshi Gupta
                  <br />
                  Faculty Convener
                  <br />
                  <br />
                  E-mail ID:{" "}
                  <a href="mailto:internship@mnlua.ac.in">
                    internship@mnlua.ac.in
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15009.451871847506!2d75.3207428!3d19.8668896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1711d171c0b65a3!2sMaharashtra+National+Law+University!5e0!3m2!1sen!2sin!4v1561461642373!5m2!1sen!2sin"
        style={{ width: "100%" }}
        height={350}
        frameBorder={0}
        allowFullScreen=""
      />

        <section className="contact-form">
          <div className="container">
            <div className="row">
              <h2 className="text-center mb-50">Get in Touch With Us</h2>

              <div className="col-md-8 col-md-offset-2">
                <form onSubmit={handleSubmit}>
                  {/* <!-- FORM SUBJECT -->
                    <!-- If you want then you can change the subject value BELOW --> */}

                  <div className="col-md-6 col-sm-6 no-padding-left">
                    <input
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      minlength="4"
                      placeholder="First Name (Required)"
                      type="text"
                      required
                      aria-required="true"
                      ref={nameRef}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 no-padding-right">
                    <input
                      className="form-control"
                      name="last_name"
                      id="last_name"
                      minlength="4"
                      placeholder="Last Name (Required)"
                      type="text"
                      required
                      aria-required="true"
                      ref={lnameRef}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 no-padding-left">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address (Required)"
                      required
                      aria-required="true"
                      ref={emailRef}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 no-padding-right">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="subject"
                      ref={subjectRef}
                    />
                  </div>

                  <div className="col-md-12 no-padding">
                    <textarea
                      className="form-control"
                      rows="7"
                      cols="30"
                      name="message"
                      id="message"
                      minlength="4"
                      placeholder="Say Something..."
                      aria-required="true"
                      ref={msgRef}
                      defaultValue={""}
                    ></textarea>

                    <div
                      className="reCaptchaWapper"
                      style={{ marginBottom: "25px" }}
                    >
                      <ReCAPTCHA
                        sitekey="6LdWajEmAAAAAG9NjvX83_83BpxqWFnHAZSS8sTM"
                        onChange={onChange}
                      />
                    </div>

                    <button
                      className="submit btn btn-style1"
                      type="submit"
                      disabled={!verfied}
                    >
                      Send message
                    </button>
                    <Image
                      src="/images/loader.gif"
                      id="loader"
                      className="hidden"
                      width={30}
                      height={30}
                      alt=""
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/244a1e44-52ff-4e55-b3d6-be2e87673d40`;
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
