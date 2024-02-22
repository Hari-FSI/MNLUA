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
			<style>{`
    .table-bordered th strong {
      color: #fff;
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
									<Link href="/authorities-of-the-university">
										Authorities Of The University
									</Link>
								</li>
								<li className="">
									<Link href="/general-council">University Council</Link>
									{/*<ul class="dropdown-menu">
<li class=''>
<a href="general-council.php">General Council</a>
</li>
<li class=''>
<a href="executive-council.php">Executive Council</a>
</li>
<li class=''>
<a href="academic-council.php">Academic Council</a>
</li>
<li class=''>
<a href="building-commitee.php">Building Commitee</a>
</li>
<li class=''>
<a href="planning-board.php">Planning Board</a>
</li>
<li class=''>
<a href="finance-committee.php">Finance Committee</a>
</li>
</ul>*/}
								</li>
								<li className="">
									<Link href="/honorary-professors">Honorary Professors</Link>
									{/*<ul class='dropdown-menu'>
<li class=''>
<a href="honorary-professors.php" aria-current="page">Judiciary</a>
</li>
<li class=''>
<a href="teaching.php" >Teaching</a>
</li>
<li class=''>
<a href="executive.php" aria-current="page">Executive</a>
</li>
</ul>*/}
								</li>
								<li className="">
									<Link href="/it-advisors-information-technology">
										IT Advisors
									</Link>
								</li>
								<li className="">
									<Link href="/faculty">Faculty</Link>
									{/*<ul class='dropdown-menu'>
<li class=''>
<a href="faculty.php" aria-current="page">Core Faculty</a>
</li>
<li class=''>
<a href="visiting-faculty.php" >Visiting Faculty</a>
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
					<h3 class="in-heading">
						AUTHORITIES OF THE UNIVERSITY (MAHARASHTRA NATIONAL LAW UNIVERSITY,
						ACT, 2014 | AMEMDED IN 2018)
					</h3>
					<div className="row">
						<div className="col-md-3">
							<LeftSidebar />
						</div>
						<div className="col-md-9 detail-blk txt-justify singel-blk">
							<h2 className="in-heading">
								MEMBERS OF FINANCE COMMITTEE (UNDER SECTION 25 (1) (I) AND (II))
							</h2>

							<div
								className="fees-structure"
								dangerouslySetInnerHTML={{
									__html: posts.data.attributes.body[0].value,
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

export default AuthoritiesofTheUniversity;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	//composer require 'drupal/devel:^5.0'
	const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/f22f10a2-e352-4ae8-a52f-ca055213dd3c`;
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
