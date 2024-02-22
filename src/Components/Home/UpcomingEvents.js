import Image from "next/image";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";;

import Link from "next/link";
import NewImage from "./NewImage";
function UpcomingEvents({ events }) {

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (

		
		<>
			
			<div className="">
			<div className="upcoming-events-sec">
			<Carousel
				ssr
				infinite={true}
				swipeable={true}
				draggable={true}
				autoPlay={false}
				showDots={false}
				renderDotsOutside={false}
				arrows={true}
				responsive={responsive}
				partialVisbile
				//customDot={<CustomDot />}
				autoPlaySpeed={300}
				keyBoardControl={true}
				//customTransition="all 1"
				transitionDuration={1000}
				containerClass="carousel-container">
				{events.map((item, index) => (
						<div key={index}>
							<div className="item">
								<div className="slider-img">
									<NewImage
										src={item.field_image}
										width={360}
										height={360}
										alt={item.title}
									/>
								</div>
								<div className="slider-txt">
									<h3>{item.title}</h3>
									<p><i class="fa fa-calendar"></i> {item.field_eventsdate}</p>
								</div>
							</div>
						</div>
					))}

				
			</Carousel>
				<div className="clearfix" />
			</div>
			</div>
		</>
	);
}

export default UpcomingEvents;
