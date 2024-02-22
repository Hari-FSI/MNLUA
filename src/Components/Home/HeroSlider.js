import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import NewImage from "../NewImage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";;

function HeroSlider({ slider }) {

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
	
	console.log(slider);
	const heroImages = [...slider];
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			initial: 0,
			loop: true,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2500);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		]
	);

	

	return (
		<>

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
				autoPlaySpeed={9000}
				//keyBoardControl={true}
				//customTransition="all 4s"
				//transitionDuration={8000}
				containerClass="carousel-container">
				{heroImages.map((imageUrl, index) => (
						<div key={index} className="carousel-item">
							<div className="item">
								<NewImage
								src={imageUrl.trim()}
								alt="Picture of the author"
								title="Picture of the author"
								width="1920"
								height="720"
								sizes="100vw"
								loading="eager"
								priority={true}
							/>
								
							</div>
						</div>
					))}

				
			</Carousel>

		
			{/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )} */}
		</>
	);
}

export default HeroSlider;
