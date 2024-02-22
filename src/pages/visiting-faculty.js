import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewImage from "../Components/NewImage";
import ReadMore from "../Components/ReadMore";
import JudiciaryTopMenu from "../Components/AcademicMenu/JudiciaryTopMenu";
import TopMenu from "../Components/AcademicMenu/TopMenu";
import TopSecondMenu from "../Components/AcademicMenu/TopSecondMenu";

function AuthoritiesofTheUniversity1({ posts }) {
	console.log(posts);
	return "ff";
}

function AuthoritiesofTheUniversity({ posts }) {
	console.log(posts);

	const data = posts.data;
	console.log(data);
	const img = posts.included;
	console.log(img);

	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredData = posts.filter((data) =>
		data.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<style jsx>{`
				.singel-blk .people-detail__block {
					margin-bottom: 25px;
				}
				.page-content-sec {
					padding-top: 40px;
				}
			`}</style>
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
					<h1>DISTINGUISHED HONORARY VISITING PROFESSORS</h1>
					<span className="bottom-bar" />
				</div>
			</div>

			<TopMenu />
			<TopSecondMenu />

			<section className="page-content-sec">
				<div className="container">
					<div className="faculty__listing__search">
						<p className="title">Search within</p>
						<div
							className="facetwp-facet facetwp-facet-faculty_search facetwp-type-search"
							data-name="faculty_search"
							data-type="search">
							<span className="facetwp-input-wrap">
								<i className="facetwp-icon" />
								<input
									type="text"
									className="facetwp-search form-control"
									placeholder="By name or title"
									onChange={handleChange}
									autocomplete="off"
								/>
							</span>
						</div>
					</div>
					<h3 class="in-heading"></h3>
					<div className="row">
						<div className="col-md-12 detail-blk txt-justify singel-blk">
							<h2 className="in-heading">VISITING FACULTY</h2>

							{filteredData.map((item, index) => (
								<div
									key={item.index}
									className="people-detail__block people-detail__block--with-link">
									<div className="small-block item member-blk">
										<div className="people-detail__block-left">
											<figure className="people-detail__block-figure">
												{" "}
												<NewImage
													src={item.field_image_1}
													width={100}
													height={100}
													alt={item?.title}
												/>
											</figure>
										</div>

										<div className="people-detail__block-content">
											<p className="people-detail__block-name">{item?.title}</p>
											<p className="people-detail__block-designation">
												{item?.field_designation}
											</p>
											<div className="readmore-profile justify-txt">
												<ReadMore text={item?.body} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default AuthoritiesofTheUniversity;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/faculty-visiting.json`;
	console.log(url);
	const res = await fetch(url);
	const posts = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};
}
