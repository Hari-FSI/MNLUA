import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function CopyrightPolicy() {
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
        className="page-bannar about-us-bannar"
        style={{ background: "url(img/banner1.jpg)" }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>Copyright Policy</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      {/* Page Header End*/}
      <div className="second-menu hidden-xs">
        <div className="container">
          <div className="sidebar1">
            <ul>
              <li>
                <a href="terms-conditions.php">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="pricacy-policy.php">Privacy Ploicy</a>
              </li>
              <li>
                <a href="copyright-policy.php" className="active">
                  Copyright Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Page Ccontent */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-md-offset-2">
              <h1 className="title-2">Copyright Policy</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/*?php include 'includes/fotter.php';?*/}
    </>
  );
}

export default CopyrightPolicy;
