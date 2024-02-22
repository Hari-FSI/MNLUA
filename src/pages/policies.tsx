import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/Tenders/LeftSidebar";

const policies = () => {
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
      <h2 className="in-heading">Policies</h2>
      <div className="b-listing-list-group u-block all-notification-blks">
      <ul className="list-group__list">

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/policies/Gender-Sensitizaton.pdf" target="_blank">
       Gender Sensitizaton
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/policies/Green-Policy.pdf" target="_blank">
      Green Policy
      </a>
      </h3>
      </div>
      </li>

      <li className="list-group__item ">
      <div className="list-group__body list-group__body--s">
      <h3>
      <a className="list-group__url c-icon-pdf" 
      href="pdf/policies/Refund-Policy.pdf" target="_blank">
      Refund Policy
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

export default policies