import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NewImage from "../../Components/NewImage";
import React, { useState } from "react";
import TopMenu from "../../Components/AcademicMenu/TopMenu";
export async function getServerSideProps(context) {
  const { params, req, response } = context;
  const pid = params.slug; // Get ID from slug `/book/1`
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/designation/${pid}?include=field_image`
  ); // Using `restcountries.com` as `restcountries.eu` is no longer accessible

  const node = await res.json();
  return {
    props: { node }, // Will be passed to the page component as props'}
  };
}

function Selected_etopup({ node }) {
  console.log(node.data);
  const {
    title,
    body,
    field_about,
    field_conferences,
    field_contact,
    field_courses,
    field_designation,
    field_email,
    field_faculty_type,
    field_publication,
    field_qualification,
  } = node.data.attributes;

  const field_image = node.included[0].attributes.uri.url;
  const [nodebody, setBody] = useState(field_about.value);
  const [active, SetActive] = useState("About");
  const [showTab, SetShowTab] = useState(true);

  const shoot = (a) => {
    SetShowTab(true);
    SetActive(a);
    switch (a) {
      case "About":
        try {
          setBody(field_about.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>About</h4>");
        }
        break;
      case "Qualifications":
        try {
          setBody("<h4>Qualifications</h4>" + field_qualification.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Qualifications</h4>");
        }

        break;
      case "Research":
        try {
          setBody("<h4>Research</h4>" + field_qualification.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Research</h4>");
        }
        break;
      case "Publications":
        try {
          setBody("<h4>Publications</h4>" + field_publication.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Publications</h4>");
        }
        break;
      case "Conferences":
        try {
          setBody("<h4>Conferences</h4>" + field_conferences.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Conferences</h4>");
        }
        break;
      case "Courses":
        try {
          setBody("<h4>Courses</h4>" + field_courses.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Courses</h4>");
        }
        break;
      case "Contact":
        try {
          setBody("<h4>Contact Details</h4>" + field_contact.value);
        } catch (error) {
          SetShowTab(false);
          setBody("<h4>Contact Details</h4>");
        }

        break;
      default:
      // code block
    }
  };

  return (
    <>
      <style jsx>
        {`
          .tab-pane {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <Head>
        <title>MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD</title>
        <meta
          name="description"
          content="MNLUA – MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="page-bannar"
        style={{
          backgroundImage: "url(/images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>{title}</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      <TopMenu />
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 pull-right faculty-pic-sec">
              <NewImage
                src={field_image}
                alt="Professor"
                className="img-responsive"
                width="261"
                height="300"
              />
              <br />
              <h2>{title}</h2>
              <p className="position">{field_designation}</p>

              <h6 className="bborder">Email</h6>
              <p>
                <a href="#">{field_email}</a>
              </p>
            </div>{" "}
            <div className="col-md-9 col-sm-9 faculty-content-sec">
              <div className="vertical-tabs">
                <ul className="nav nav-pills nav-stacked pull-left">
                  <li className={active == "About" ? "active" : "Not-active"}>
                    <span
                      data-toggle="pill"
                      href="#pill21"
                      className="active"
                      onClick={() => shoot("About")}
                    >
                      About
                    </span>
                  </li>
                  <li
                    className={
                      active == "Qualifications" ? "active" : "Not-active"
                    }
                  >
                    <span
                      data-toggle="pill"
                      href="#pill22"
                      onClick={() => shoot("Qualifications")}
                    >
                      Qualifications
                    </span>
                  </li>
                  <li
                    className={active == "Research" ? "active" : "Not-active"}
                  >
                    <span
                      data-toggle="pill"
                      href="#pill27"
                      className=""
                      onClick={() => shoot("Research")}
                    >
                      Research
                    </span>
                  </li>
                  <li
                    className={
                      active == "Publications" ? "active" : "Not-active"
                    }
                  >
                    <span
                      data-toggle="pill"
                      href="#pill23"
                      className=""
                      onClick={() => shoot("Publications")}
                    >
                      Publications
                    </span>
                  </li>
                  <li
                    className={
                      active == "Conferences" ? "active" : "Not-active"
                    }
                  >
                    <span
                      data-toggle="pill"
                      href="#pill24"
                      className=""
                      onClick={() => shoot("Conferences")}
                    >
                      Conferences
                    </span>
                  </li>
                  <li className={active == "Courses" ? "active" : "Not-active"}>
                    <span
                      data-toggle="pill"
                      href="#pill25"
                      className=""
                      onClick={() => shoot("Courses")}
                    >
                      Courses
                    </span>
                  </li>
                  <li className={active == "Contact" ? "active" : "Not-active"}>
                    <span
                      data-toggle="pill"
                      href="#pill26"
                      className=""
                      onClick={() => shoot("Contact")}
                    >
                      Contact
                    </span>
                  </li>
                </ul>{" "}
                <div className="tab-content txt-justify"></div>
                {showTab ? (
                  <>
                    <div id="pill21" className="tab-pane">
                      <div
                        className="registrar"
                        dangerouslySetInnerHTML={{ __html: nodebody }}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
export default Selected_etopup;
