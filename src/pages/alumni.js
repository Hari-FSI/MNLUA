import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Alumni({ posts }) {
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
					<h1>ALUMNI</h1>
					<span className="bottom-bar" />
				</div>
			</div>
			<div
				className="pager"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/>
			<Footer />
		</>
	);
}

export default Alumni;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/1209ceac-9ed8-4ef7-bce2-0b8cea66086c`;
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
