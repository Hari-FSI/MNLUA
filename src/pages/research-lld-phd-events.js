import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/Research/LeftSidebar";
import Image from "../Components/NewImage";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function ResearchAboutOffice({ posts }) {
	let ImgArray = posts[0].field_image;
	ImgArray = ImgArray.split(" ").join("");
	const array = ImgArray.split(",");
	console.log(array);

	Fancybox.bind("[data-fancybox]", {
		speed: 1000,
	});
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
					<span className="bottom-bar" />
				</div>
			</div>

			<section className="page-content-sec">
				<div className="container">
					<h3 className="in-heading"></h3>
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9 detail-blk txt-justify singel-blk">
							{/* <div
                className="management_depert"
                dangerouslySetInnerHTML={{
                  __html: posts.data.attributes.body[0].value,
                }}
              /> */}

							<div className="people-detail people-detail--brief">
								<h2 className="in-heading">LLD & Ph.D. Events</h2>
								<div className="p-gallery-sec">
									<div className="row">
										{array.map((e, i) => (
											<aside className="col-md-4" key={i}>
												<div className="inblock">
													<a
														className="block-link"
														href={e}
														data-fancybox="lld-phd-events"
														data-caption="LLD &amp; Ph.D. Events">
														<Image
															src={e}
															alt="LLD &amp; Ph.D. Events"
															title="Picture of the author"
															width="262"
															height="175"
														/>
													</a>
												</div>
											</aside>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default ResearchAboutOffice;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	//nid =225
	const url = `https://${process.env.NEXT_PUBLIC_URL}/lld-phd-events.json`;
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
