import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "./NewImage";
import axios from "axios";

function Centres({ imageUrl, tid }) {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get(`/api/pdflist?tid=${tid}`).then((res) => {
			//(res.data);
			console.log(res.data.pdf);
			const array = res.data.pdf;
			if (array.length > 0) {
				setPosts(res.data.pdf);
			}
		});
	}, [tid]);
	return (
		<>
			<div className="b-listing-list-group u-block">
				<div className="row">
					<div className="col-md-3 pull-right">
						<Image
							key={imageUrl}
							src={imageUrl}
							alt="icon"
							width="359"
							height="145"
						/>
					</div>
					<div className="col-md-9">
						<div className="b-listing-list-group u-block all-notification-blks">
							<ul
								className="list-group__list"
								itemscope=""
								itemtype="http://schema.org/ItemList">
								{posts.map((item, index) => (
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
														<i className="fa fa-calendar"></i> {item.field_date}
													</li>
												</ul> */}
											</div>
										</li>
									</div>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Centres;
