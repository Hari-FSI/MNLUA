import React from "react";
import Head from "next/head";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TopNavbtn from "../../Components/Media/TopNavbtn";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tab from "./Component/Tab";
import Tiles2021 from "../../Components/photo-gallery/Tiles2021";
import Tiles2022 from "../../Components/photo-gallery/Tiles2022";
import Tiles from "../../Components/photo-gallery/Tiles";

function PhotoGallery({ node }) {
	console.log(node);
	const [activeTab, setActiveTab] = useState("tab-2023");

	Fancybox.bind("[data-fancybox]", {
		speed: 1000,
	});

	return (
		<>
			<style jsx>{`
				.tabs-fillter {
					display: flex;
					gap: 8px;
					margin: 25px 0;
				}

				.tabs-fillter button {
					background: #fff;
					border: none;
					outline: none;
					font-style: normal;
					font-weight: 600;
					color: #fff;
					padding-right: 30px;
					background-color: #001641;
					font-size: 16px;
					line-height: 22px;
					border: none;
					border-radius: 0;
					text-transform: uppercase;

					position: relative;
					display: block;
					padding: 10px 15px;
				}

				.tabs-fillter button:hover,
				.tabs-fillter button.btn-active {
					color: #ee2446;
					background-color: #fff;
					border: none;
					border-radius: 0;
				}

				.hmstab-wapper .tab-pane {
					display: none;
					padding: 5px;
					border: 1px solid #eaeaea;
					border-radius: 5px;
					border-top-left-radius: 0px;
					min-height: 350px;
				}

				.hmstab-wapper .tab-pane h2.in-heading {
					display: block;
					background: #f7f3ec;
					width: 100%;
					padding: 6px 12px;
					margin: 0 0 10px 0;
					color: #41679c;
					font-size: 22px;
					font-weight: 500;
					text-transform: uppercase;
					line-height: 28px;
					letter-spacing: 0px;
				}

				.hmstab-wapper .tab-pane.active {
					display: block;
				}

				.hmstab-wapper .tab-pane aside {
					margin: 0 0 30px 0;
				}

				.hmstab-wapper .tab-pane aside img {
					height: 220px;
					width: 100%;
					margin-bottom: 10px;
				}
			`}</style>

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
						<h1>PHOTO GALLERY</h1>
						<span className="bottom-bar" />
					</div>
				</div>
				<TopNavbtn />

				<div className="container">
					<Tab />
				</div>

				<div className="container">
					<div className="hmstab-wapper photo-gallery">
						<Tiles node={node} />
						{/* <Tiles2022 />
						<Tiles2021 /> */}
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const { params, req, response } = context;
	//const pid = params.slug; // Get ID from slug `/book/1`
	//const protocol = req.headers["x-forwarded-proto"] || "http";
	//const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
	const res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/photo_gallery_2022`
	); // Using `restcountries.com` as `restcountries.eu` is no longer accessible

	const node = await res.json();
	return {
		props: { node }, // Will be passed to the page component as props'}
	};
}

export default PhotoGallery;
