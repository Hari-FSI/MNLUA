import React from "react";
import Image from "next/image";
import Imgtile from "./Imgtile";

function Tiles({ node }) {
	console.log(node);
	return (
		<>
			<div className="tab-pane active" id="tab-2023">
				<div className="row">
					{node.map((item, index) => (
						<div key={index}>
							<h2 className="in-heading">{item.title}</h2>
							<Imgtile data={item.field_image} />
						</div>
					))}

					<div className="clearfix"></div>
				</div>
			</div>
		</>
	);
}

export default Tiles;
