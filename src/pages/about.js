import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Experience from "../Components/Home/Experience";

function About({ posts, homeexperience }) {
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
          backgroundImage: "url(images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>ABOUT MNLU-A</h1>
          <span className="bottom-bar" />
        </div>
      </div>
			<style jsx>{`
				.about {
				}
			`}</style>
			<div
				className="about about_page"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/>
			<section className="page-sec keyhighlights-sec">
						<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4">
                             <aside className="title-sec">
								<h3><span>KEY</span>Highlights</h3>
								<p>Advocating for discoveries that are of utmost importance to our world, health, and intellectual growth, within the bounds of the law.</p>
								
							 </aside>
							</div>
							<div className="col-lg-8 col-md-8">
							<Experience homeexperience={homeexperience} />
							</div>
					    </div>
						</div>
					</section>
			<Footer />
		</>
	);
}

export default About;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/7933cb1a-2d54-49e5-a476-925562c2a0f0`;
	console.log(url);
	const res = await fetch(url);
	const posts = await res.json();

	const home_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/home-experience`
	);
	const homeexperience = await home_res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
			homeexperience,
		},
		revalidate: 100, // Rebuild the page every 1 second to check for updates
	};
}
