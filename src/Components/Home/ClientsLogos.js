import Image from "next/image";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";;

import Link from "next/link";
import NewImage from "./NewImage";
function ClientsLogos({ events }) {

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};

	return (

		
		<>
			
			<div className="inner-block">
			<div className="client-log0-sec">
			<Carousel
				ssr
				infinite={true}
				swipeable={true}
				draggable={true}
				autoPlay={true}
				showDots={false}
				renderDotsOutside={false}
				arrows={true}
				responsive={responsive}
				partialVisbile
				//customDot={<CustomDot />}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				//customTransition="all 1"
				transitionDuration={1000}
				containerClass="carousel-container">
				<aside className="item">
											{" "}
											<Image
												src="/images/clients/cclg-center.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cccl.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cicl.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/celsd.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cwa.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cclp.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cadr.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cfs.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cei.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cpl.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										<aside className="item">
											{" "}
											<Image
												src="/images/clients/cipit.png"
												width={310}
												height={132}
												alt=""
											/>
										</aside>
										
				
			</Carousel>
				<div className="clearfix" />
			</div>
			</div>
		</>
	);
}

export default ClientsLogos;
