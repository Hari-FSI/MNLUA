import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Rti({ posts }) {
	console.log(posts);
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
				}}>
				<style>{`
        .page-content-sec h3.in-heading {
          display: block;
          width: 100%;
          padding: 6px 0px 0;
          margin: 20px 0 0px 0;
          color: #fa865b;
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
        }
        `}</style>
				<div className="header-overlay" />
				<div className="container">
					<h1></h1>
					<span className="bottom-bar" />
				</div>
			</div>
			<div
				className="rti"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/>
			<Footer />
		</div>
	);
}

export default Rti;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/d0edd8ff-5c8b-47ab-8007-7de875e88898`;
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
