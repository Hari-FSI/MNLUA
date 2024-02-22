import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/Tenders/LeftSidebar";

const downloads = () => {
  return (
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
      <div
        className="page-bannar"
        style={{
          backgroundImage: "url(/images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <span className="bottom-bar" />
        </div>
      </div>
      <br />
      <section className="page-content-sec">
      <div className="container">
      <div className="row">
      <div className="col-md-12 detail-blk txt-justify singel-blk">
      <div className="people-detail people-detail--brief">
      <h2 className="in-heading">Downloads</h2>
      <div className="b-listing-list-group u-block all-notification-blks">
      <ul className="list-group__list">

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Bonafide-Certificate.pdf" target="_blank">
      Bonafide Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Caste-Validity.pdf" target="_blank">
      Caste Validity
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Character-Certificate.pdf" target="_blank">
      Character Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Degree-Certificate.pdf" target="_blank">
      Degree Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Duplicate-Transfer-Certificate.pdf" target="_blank">
      Duplicate Transfer Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Educational-Verification.pdf" target="_blank">
    Educational Verification
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Experience-Employment-Certificate.pdf" target="_blank">
       Experience Employment Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Fees-Estimate.pdf" target="_blank">
      Fees Estimate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Migration-Certificate.pdf" target="_blank">
       Migration Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/N0-Dues-Form.pdf" target="_blank">
      N0 Dues Form
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Rank-Certificate.pdf" target="_blank">
      Rank Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Transcript-Certificate.pdf" target="_blank">
       Transcript Certificate
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/download/Transfer-Certificate.pdf" target="_blank">
      Transfer Certificate
      </a>
      </h3>
      </div>
      </li>

      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <Footer />

    </div>
  )
}

export default downloads