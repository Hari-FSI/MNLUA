import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Modal from "../Components/homeModal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhatNew from "../Components/Home/WhatNew";
import Leadership from "../Components/Home/Leadership";
import Experience from "../Components/Home/Experience";
import News from "../Components/Home/News";
import Socialfeeds from "../Components/Home/Socialfeeds";
import { useState } from "react";
import HeroSlider from "../Components/Home/HeroSlider";
import UpcomingEvents from "../Components/Home/UpcomingEvents";
import Clients from "../Components/Home/ClientsLogos";

//serverside props
export async function getStaticProps() {
	const res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/newslist.json`
	);
	const news = await res.json();

	const leadership_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/leadership.json`
	);
	const leadership = await leadership_res.json();

	const notification_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/whatnew-notification.json`
	);
	const notification = await notification_res.json();

	const admission_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/whatnew-admission.json`
	);
	const admission = await admission_res.json();

	const mnlu_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/whatnew-mnlu.json`
	);
	const mnlu = await mnlu_res.json();

	const home_res = await fetch(
		`https://${process.env.NEXT_PUBLIC_URL}/home-experience`
	);
	const homeexperience = await home_res.json();

	const url = `https://${process.env.NEXT_PUBLIC_URL}/home-popup.json`;
	const homepopup = await fetch(url);
	const popup = await homepopup.json();

	const sliderurl = `https://${process.env.NEXT_PUBLIC_URL}/homesliderapi`;
	const homesliderurl = await fetch(sliderurl);
	const slider = await homesliderurl.json();

	const upcomingevents_url = `https://${process.env.NEXT_PUBLIC_URL}/upcoming-events-home.json`;
	const upcomingevents = await fetch(upcomingevents_url);
	const events = await upcomingevents.json();

	return {
		props: {
			news,
			leadership,
			notification,
			admission,
			mnlu,
			popup,
			homeexperience,
			events,
			slider,
		},
	};
}

export default function Home({
	news,
	leadership,
	notification,
	admission,
	mnlu,
	popup,
	homeexperience,
	events,
	slider,
}) {
	console.log(slider[0].field_image);
	const sliderString = slider[0].field_image;
	const arraySlider = sliderString.split(",");
	//const inter = Inter({ subsets: ['latin'] })
	const [show, setShow] = useState(popup[0].status);

	/*   const video1 = `https://${process.env.NEXT_PUBLIC_URL}/video/msnlu-v-1.mp4`;
  const video2 = `https://${process.env.NEXT_PUBLIC_URL}/video/msnlu-v-1.webm`; */

	if (show == "Off") {
		return (
			<>
				<Head>
					<title>MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD</title>
					<meta
						name="description"
						content="MNLUA – MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/img/logo.png"/>
				</Head>
				<Modal popup={popup} setShow={setShow} link={popup[0]?.field_link} />
			</>
		);
	}

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
			<>
				{" "}
				<div className="conatiner-box">
					{" "}
					<Header />
					<section className="banner-sec">
						{/* <video
						playsInline="playsinline"
						autoPlay="autoplay"
						className="tagline-video video-bg"
						id="banner-vid"
						muted="muted"
						loop="loop"
						data-keepplaying=""
						>
						<source src={video1} type="video/mp4" />
						<source src={video2} type="video/webm" />
						</video> */}
				
								<HeroSlider slider={arraySlider} />
					
					</section>


					<section className="page-sec vcmsgnotifyscroll-sec vcmsgnotifyscroll2-sec">
						<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-8">
							<h2 className="heading">LEADERSHIP TEAM</h2>
							<Leadership leadership={leadership} />
                             
							</div>
							<div className="col-lg-4 col-md-4">
                              <div className="noticeBoard">
							  <h4>Notice Board </h4>
								<div className="marquee-p">
								<p>
								<a target="_blank" href="https://mnlua.ac.in/pdf/Notice-Inviting-Quotations-for-Hiring-of-agency-to-coduct-proctored-online-exam.pdf">Notice Inviting Quotations for Hiring of agency to conduct proctored online exam</a>
								</p>
								<p>
								<a target="_blank" href="https://mnlua.ac.in/pdf/NIQ-aluminium-with-glass-doors-it-up.pdf"> NOTICE INVITING QUOTATIONS FOR COMPLETE ALUMINIUM PARTITION WORK WITH BOARD AND GLASS (DISMANTLING &amp; NEW WORK)</a>
								</p>
								<p>
								<a target="_blank" href="https://mnlua.ac.in/pdf/Corrigendum-of-Hardware-Network-Equipment..pdf"> Corrigendum of Hardware &amp; Network Equipment</a>
								</p>
								<p>
								<a target="_blank" href="https://mnlua.ac.in/pdf/Corrigendum-of-Hardware-Network-Equipment..pdf"> NOTICE INVITING QUOTATIONS FOR GYM EQUIPMENTS</a>
								</p>
								</div>
							  </div>
							</div>
					    </div>
						</div>
					</section>	


					<section className="page-sec keyhighlights-sec">
						<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4">
                             <aside className="title-sec">
								<h3><span>KEY</span>Highlights</h3>
								<p>Advocating for discoveries that are of utmost importance to our world, health, and intellectual growth, within the bounds of the law.</p>
								
							 </aside>
							</div>
							<div className="col-lg-8 col-md-8">
							<Experience homeexperience={homeexperience} />
							</div>
					    </div>
						</div>
					</section>

						<section className="page-sec studymnlua-sec" style={{backgroundImage:`url(/images/banner5.webp)`}}>
						<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
                             <div className="title-sec">
								<h3>STUDY @MNLU-A</h3>
							 </div>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							        <Image
									src="/images/icons/icon-school.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>Infrastructure </h3>
								<span>Read More</span>
								<Link href="/infrastructure"></Link>
							 </aside>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							   <Image
									src="/images/icons/icon-program.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>Programs </h3>
								<span>Read More</span>
								<Link href="/course-ballb-hons"></Link>
							 </aside>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							   <Image
									src="/images/icons/icon-faculty.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>Faculty </h3>
								<span>Read More</span>
								<Link href="/faculty"></Link>
							 </aside>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							   <Image
									src="/images/icons/icon-placement.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>Placement </h3>
								<span>Read More</span>
								<Link href="/placement-committee"></Link>
							 </aside>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							   <Image
									src="/images/icons/icon-tenders.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>Tenders </h3>
								<span>Read More</span>
								<Link href="/tenders"></Link>
							 </aside>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                             <aside>
							   <Image
									src="/images/icons/icon-iqac.png"
									width={80}
									height={80}
									alt=""
									/>
								<h3>IQAC </h3>
								<span>Read More</span>
								<Link href="/iqac"></Link>
							 </aside>
							</div>
					    </div>
						<hr className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        <div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div className="unibox-sec">
						<div class="folding-angle"></div>
						<Image
						src="/images/icons/academic.png"
						width={60}
						height={60}
						alt=""
						/>
						<h3>Administration </h3>
						<Link href="/administration"></Link>
						</div>
						</div>
                       
					    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div className="unibox-sec">
						<div class="folding-angle"></div>
						<Image
						src="/images/icons/research.png"
						width={60}
						height={60}
						alt=""
						/>
						<h3>Research </h3>
						<Link href="/research-about-office"></Link>
						</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div className="unibox-sec">
						<div class="folding-angle"></div>
						<Image
						src="/images/icons/centers.png"
						width={60}
						height={60}
						alt=""
						/>
						<h3>Centres </h3>
						<Link href="/centres"></Link>
						</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div className="unibox-sec">
						<div class="folding-angle"></div>
						<Image
						src="/images/icons/mcat.png"
						width={60}
						height={60}
						alt=""
						/>
						<h3>MCAT 2023 </h3>
						<Link href="/m-cat-2023-notifications"></Link>
						</div>
						</div>

						</div>
                            
						</div>
					</section>

					<section className="hslider-sec">
						<div className="container">
							<div className="heading">
								<div className="row">
									<div className="col-md-4">
										<div className="inblock">
										<div class="site-heading event-title text-center">
										<h2><i class="fa fa-calendar"></i> Events</h2>
										</div>
										 <UpcomingEvents events={events} />
							             <div className="clearfix" />
										 <a class="allBtn" href="javascript:void(0);">View all Events <i class="fa fa-long-arrow-right"></i></a>
										 </div>
									</div>

									<div className="col-md-4">
										<div className="inblock">
										<div class="site-heading event-title text-center">
										<h2><i class="fa fa fa-bullhorn"></i> NEWS & UPDATES</h2>
										</div>
										<News news={news} />
							             <div className="clearfix" />
										 <a class="allBtn" href="javascript:void(0);">View all news <i class="fa fa-long-arrow-right"></i></a>
										 </div>
									</div>

									<div className="col-md-4">
										<div className="inblock">
										<div class="site-heading event-title text-center">
										<h2><i class="fa fa-file-text"></i> CIRCULAR</h2>
										</div>
										<WhatNew notification={notification} />
							             <div className="clearfix" />
										 <Link class="allBtn" href="/fee-notice">View all <i class="fa fa-long-arrow-right"></i></Link>
										 </div>
									</div>

								</div>
							</div>
							
						</div>
					</section>
					
					{/*<section className="hslider-sec">
						<div className="container">
							<div className="heading">
								<div className="row">
									<div className="col-md-8">
										<h3>SOCIAL FEEDS</h3>
										<p>Keep yourself updated.</p>
									</div>
								</div>
							</div>

							<Socialfeeds />
						</div>
					</section>
					<div className="clearfix" />
					<section className="campus-tour padding-lg">
						<div className="fs-gal-view">
							<h1 />
							<Image
								className="fs-gal-prev fs-gal-nav"
								src="/img/prev.svg"
								alt="Previous picture"
								title="Previous picture"
								width={100}
								height={100}
							/>
							<Image
								className="fs-gal-next fs-gal-nav"
								src="/img/next.svg"
								alt="Next picture"
								title="Next picture"
								width={100}
								height={100}
							/>
							<Image
								className="fs-gal-close"
								src="/img/close.svg"
								alt="Close gallery"
								title="Close gallery"
								width={100}
								height={100}
							/>
							<Image
								className="fs-gal-main"
								src=""
								alt=""
								width={100}
								height={100}
							/>
						</div>
					</section>*/}
					<section className="clients-logos">
						<div className="container">
							<div className="row">
								<div className="col-md-3">
								<div className="title-sec">
								<h3>OUR Centres <i class="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
							 </div>
								</div>	
								<div className="col-md-9">
									<Clients/>
								</div>
							</div>
						</div>
					</section>
					<Footer />
				</div>
			</>
		</>
	);
}
