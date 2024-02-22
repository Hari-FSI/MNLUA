import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewImage from "./NewImage";
import Link from "next/link";

function News({ news }) {

	return (
		<div className="news-sec">
			
				{news.map((item, index) => (
					<div key={item.index} className="item">
						<div className="in-block ">
						<div className="div-table">
							<aside>
							<NewImage src={item.field_image} />
							</aside>
							<aside>
							<div className="title-sec slider-txt">
								<h3> {item.title}</h3>
								<p>{item.field_date}</p>
							</div>
							</aside>
						</div>
						
						<Link href="/home" className="block-link"></Link>
						</div>
					</div>
				))}
		</div>
	);
}

export default News;
