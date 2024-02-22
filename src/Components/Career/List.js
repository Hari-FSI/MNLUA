import React from "react";
import Details from "./Details";

function List({ post }) {
	console.log(post);
	return (
		<div className="b-listing-list-group u-block all-notification-blks">
			<ul
				className="list-group__list"
				itemscope=""
				itemtype="http://schema.org/ItemList">
				{post.map((item, index) => (
					<li key={index} className="list-group__item">
						<div
							className="list-group__body list-group__body--s"
							itemprop="name">
							<h3>{item.name}</h3>
							<Details id={item.tid} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;
