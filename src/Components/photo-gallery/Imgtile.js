import React from "react";
//import Image from "next/image";
import Image from "../NewImage";
function Imgtile({ data }) {
	console.log(data);
	const urlsArray = data.split(", ");
	return (
		<>
			{urlsArray.map((item, index) => (
				<div key={index}>
					<aside className="col-md-4 col-sm-6">
						<div className="inblock">
							<a
								className="block-link"
								href={item}
								data-fancybox="pg2"
								data-caption="MNLUA INDUCTION PROGRAMME 2022">
								<Image
									src={item}
									alt="MNLUA INDUCTION PROGRAMME 2022"
									title="Picture of the author"
									width="356"
									height="220"
								/>
							</a>
						</div>
					</aside>
				</div>
			))}
		</>
	);
}

export default Imgtile;
