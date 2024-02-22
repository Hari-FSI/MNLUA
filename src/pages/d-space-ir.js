import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";
function Library({ posts }) {
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

			<TopMenu />

			<section className="page-content-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9">
							<div
								className="library"
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

export default Library;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/ebf75ca4-afeb-4e17-bacd-490361bac290`;
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
