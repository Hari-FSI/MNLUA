import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/AdministrationMenu/TopMenu";
function ChancellorMessage({ posts }) {
	console.log(posts);
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
					<h1>CHANCELLOR MESSAGE</h1>
					<span className="bottom-bar" />
				</div>
			</div>
			<TopMenu />
			<div
				className="chancellor-message"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/>
			<Footer />

			{/* <div
        className="page-bannar"
        style={{
          backgroundImage: "url(images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>CHANCELLOR MESSAGE</h1>
          <span className="bottom-bar" />
        </div>
      </div> */}
			{/* Page Banner */}
			{/* <div className="second-menu">
        <div className="container">
          <div className="sidebar1">
           
          </div>
        </div>
      </div> */}

			{/* <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <Image
                src="/images/faculty/chan.png"
                style={{ width: "100%" }}
                alt="Professorr"
                className="img-responsive"
                width={100}
                height={100}
              />
        
            </div>
            <div className="col-md-9 col-sm-9 txt-justify ">
              <h2>CHANCELLOR MESSAGE</h2>
              <h3 className="professor-name">
                HON&apos;BLE SHRI. JUSTICE ABHAY SHREENIWAS OKA JUDGE, SUPREME
                COURT OF INDIA
              </h3>
              <p className="position">HON&apos;BLE CHANCELLOR</p>
              <p>
                His Lordship started practicing in Thane District Court in the
                chamber of his Lordship&apos;s father Shreeniwas W. Oka. In
                1985-86, his Lordship joined the chamber of Shri V. P. Tipnis, a
                former Judge of the Bombay High Court and former Lok Ayukta. His
                Lordship appeared in several important matters and in public
                interest litigations. His Lordship elevated as Additional Judge
                of the High Court of Bombay on 29th August, 2003. His Lordship
                appointed as a permanent Judge from 12th November, 2005. His
                Lordship took oath as the Chief Justice of High Court of
                Karnataka on 10th May 2019. His Lordship took oath as Judge of
                Supreme Court of India on 31st August, 2021.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div> */}
		</>
	);
}

export default ChancellorMessage;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/0ceb8df2-f67f-4aba-a8b6-d561808eade9`;
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
