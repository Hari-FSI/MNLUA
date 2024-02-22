import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/ManagementDepartmentMenu/LeftSidebar";
import TopMenu from "../Components/ManagementDepartmentMenu/TopMenu";
function ManagementDepartmentBbaLlbHons({ posts }) {
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
				<div className="header-overlay" />
				<div className="container">
					<h1></h1>
					<span className="bottom-bar" />
				</div>
			</div>

			<TopMenu />
			<section className="page-content-sec">
				<div className="container">
					<h3 class="in-heading"></h3>
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9 detail-blk txt-justify singel-blk">
							<div
								className="management_depert"
								dangerouslySetInnerHTML={{
									__html: posts.data.attributes.body[0].value,
								}}
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default ManagementDepartmentBbaLlbHons;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/54bb4dfe-7b00-4aa3-a984-14c6ff46a950`;
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
