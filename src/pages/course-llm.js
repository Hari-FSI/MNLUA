import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/AcademicMenu/TopMenu";
import LeftMenu from "../Components/AcademicMenu/LeftMenu";
function CourseBallbHons({ posts1, posts2 }) {
	console.log(posts2);
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
					<h1 />
					<span className="bottom-bar" />
				</div>
			</div>
			<TopMenu /> <br />
			<section className="page-content-sec course-ballb-hons">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<LeftMenu />{" "}
						</div>
						<div className="col-md-9 detail-blk txt-justify singel-blk">
							<div className="b-listing-list-group u-block all-notification-blks">
								{" "}
								<h2 class="in-heading">
									LL.M. (CONSTITUTIONAL LAW AND CORPORATE LAWS)
								</h2>
								<ul
									className="list-group__list"
									itemscope=""
									itemtype="http://schema.org/ItemList">
									{posts2.map((item, index) => (
										<div key={index}>
											<li className="list-group__item ">
												<div
													className="list-group__body list-group__body--s"
													itemprop="name">
													{" "}
													{item.field_new == "On" ? (
														<span className="new-img-gif"></span>
													) : (
														""
													)}
													<h3>
														<a
															className="list-group__url c-icon-pdf"
															href={item.field_file}
															target="_blank">
															{item.title}
														</a>
													</h3>
													{/* <ul className="noti-info">
														<li>
															<i className="fa fa-calendar"></i>{" "}
															{item.field_date}
														</li>
													</ul> */}
												</div>
											</li>
										</div>
									))}
								</ul>
							</div>
							<div
								className="hostel"
								dangerouslySetInnerHTML={{
									__html: posts1.data.attributes.body[0].value,
								}}
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default CourseBallbHons;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url1 = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/9d732441-5479-468f-8750-887d96575637`;

	const res1 = await fetch(url1);
	const posts1 = await res1.json();

	const url2 = `https://${process.env.NEXT_PUBLIC_URL}/pdf-list/37`;
	console.log(url2);
	const res2 = await fetch(url2);
	const posts2 = await res2.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts1,
			posts2,
		},
		revalidate: 100, // Rebuild the page every 1 second to check for updates
	};
}
