import React, { useState, useEffect } from "react";

import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Centrescomp from "../Components/Centres";
function Centres({ posts }) {
  //console.log(posts);
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
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>CENTRE</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      <br />

      <div className="centres ">
        <section className="page-content-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 detail-blk txt-justify singel-blk m-cat-2023-notifications">
                <div className="people-detail people-detail--brief">
                  {posts.map((item, index) => (
                    <div key={index}>
                      {" "}
                      <p>
                        <br />{" "}
                      </p>
                      <h2 className="in-heading">{item.name}</h2>
                      <div
                        className="library"
                        dangerouslySetInnerHTML={{
                          __html: item.description__value,
                        }}
                      />
                      {}{" "}
                      <Centrescomp imageUrl={item.field_icon} tid={item.tid} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div
				className="centres"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/> */}
      <Footer />
    </>
  );
}

export default Centres;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  const url = `https://${process.env.NEXT_PUBLIC_URL}/pdf_upload_center`;
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
