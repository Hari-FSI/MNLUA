import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewImage from "../Components/NewImage";
import LeftSidebar from "../Components/AuthorityMenu/LeftSidebar";
import ReadMore from "../Components/ReadMore";

function AuthoritiesofTheUniversity({ posts }) {
	console.log(posts);

	const data = posts.data;
	console.log(data);
	const img = posts.included;
	console.log(img);
	return (
		<>
			<style jsx>{`
				.singel-blk .people-detail__block {
					margin-bottom: 25px;
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
					<h1 />
					<span className="bottom-bar" />
				</div>
			</div>

			<div className="second-menu">
				<div className="container">
					<div className="sidebar1">
						<div>
							<ul>
								<li className="">
									<Link href="authorities-of-the-university">
										Authorities Of The University
									</Link>
								</li>
								<li className="">
									<Link href="general-council">University Council</Link>
									{/*<ul class="dropdown-menu">
<li class=''>
<Link href="general-council">General Council</Link>
</li>
<li class=''>
<Link href="executive-council">Executive Council</Link>
</li>
<li class=''>
<Link href="academic-council">Academic Council</Link>
</li>
<li class=''>
<Link href="building-commitee">Building Commitee</Link>
</li>
<li class=''>
<Link href="planning-board">Planning Board</Link>
</li>
<li class=''>
<Link href="finance-committee">Finance Committee</Link>
</li>
</ul>*/}
								</li>
								<li className="">
									<Link href="honorary-professors">Honorary Professors</Link>
									{/*<ul class='dropdown-menu'>
<li class=''>
<Link href="honorary-professors" aria-current="page">Judiciary</Link>
</li>
<li class=''>
<Link href="teaching" >Teaching</Link>
</li>
<li class=''>
<Link href="executive" aria-current="page">Executive</Link>
</li>
</ul>*/}
								</li>
								<li className="">
									<Link href="it-advisors-information-technology">
										IT Advisors
									</Link>
								</li>
								<li className="">
									<Link href="faculty">Faculty</Link>
									{/*<ul class='dropdown-menu'>
<li class=''>
<Link href="faculty" aria-current="page">Core Faculty</Link>
</li>
<li class=''>
<Link href="visiting-faculty" >Visiting Faculty</Link>
</li>
</ul>*/}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<section className="page-content-sec">
				<div className="container">
					<h3 class="in-heading"></h3>
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9 detail-blk txt-justify singel-blk">
							<h2 className="in-heading">TEACHING</h2>

							{data.map((item, index) => (
								<div
									key={item.index}
									className="people-detail__block people-detail__block--with-link">
									<div className="small-block item member-blk">
										<div className="people-detail__block-left">
											<figure className="people-detail__block-figure">
												{" "}
												<NewImage
													src={img[index].attributes.uri.url}
													width={100}
													height={100}
													alt={item.attributes.title}
												/>
											</figure>
										</div>

										<div className="people-detail__block-content">
											<p className="people-detail__block-name">
												{item.attributes.title}
											</p>
											<p className="people-detail__block-designation">
												{item.attributes.field_designation}
											</p>
											<div className="readmore-profile justify-txt">
												<ReadMore text={item.attributes.body[0].value} />
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
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/team?filter[field_category.id][value]=826a4504-8fe2-4f85-a4fd-131bfa704a8b&include=field_image`;
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
