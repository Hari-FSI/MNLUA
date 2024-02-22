import React, { useRef, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
function FeedbackForm() {
  const [verfied, setVerfied] = useState(false);
  function onChange(value) {
    // console.log("Captcha value:", value);
    setVerfied(true);
  }
  const [modal, setModal] = useState(false);
  //console.log(posts);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const lnameRef = useRef();

  const subjectRef = useRef();
  const msgRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,

      lname: lnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      subject: subjectRef.current.value,
      message: msgRef.current.value,
      type: "Feedback Form",
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
      <div>
        <div className="content-area section contact-form">
          <h3 className="section-header">
            {" "}
            Thank you for your submission. We will get back to you soon.
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="content-area section feedback-form-text contact-form">
          <h3 className="section-header feed_hide_form">Feedback Form</h3>
          <form onSubmit={handleSubmit}>
            {/* FORM SUBJECT */}
            {/* If you want then you can change the subject value BELOW */}
            <div className="col-md-6 col-sm-6 no-padding-left">
              <input
                id="cf-name"
                className="form-control"
                name="cf-name"
                minLength={4}
                placeholder="First Name (Required)"
                type="text"
                ref={nameRef}
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 no-padding-right">
              <input
                id="cf-name-last"
                className="form-control"
                name="cf-name-last"
                minLength={4}
                placeholder="Last Name (Required)"
                type="text"
                ref={lnameRef}
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 no-padding-left">
              <input
                id="cf-email"
                className="form-control"
                type="email"
                name="cf-email"
                placeholder="Email Address (Required)"
                ref={emailRef}
                required
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
            <div className="col-md-6 col-sm-6 no-padding-right">
              <input
                id="cf-name-last"
                className="form-control"
                name="cf-name-last"
                minLength={4}
                placeholder="Phone Number"
                ref={phoneRef}
              />
            </div>
            <div className="col-md-12 col-sm-12 no-padding">
              <input
                type="text"
                id="cf-subject"
                className="form-control"
                name="cf-subject"
                placeholder="subject"
                ref={subjectRef}
              />
            </div>

            <div className="col-md-12 no-padding">
              <textarea
                id="cf-message"
                className="form-control"
                rows={7}
                cols={30}
                name="cf-message"
                minLength={4}
                placeholder="Your complaints"
                ref={msgRef}
                defaultValue={""}
              />
              <input
                type="hidden"
                id="custId"
                name="custId"
                value="Complaint Form"
              />
              <div className="reCaptchaWapper" style={{ marginBottom: "25px" }}>
                <ReCAPTCHA
                  sitekey="6LdWajEmAAAAAG9NjvX83_83BpxqWFnHAZSS8sTM"
                  onChange={onChange}
                />
              </div>

              <button
                className="submit btn btn-style1"
                type="submit"
                data-toggle="modal"
                data-target="#success-pop"
                disabled={!verfied}
              >
                Apply Now
              </button>
              <div
                className="alert alert-success"
                role="alert"
                style={{ display: "none" }}
              >
                Thank you. You will contact with you very soon
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
