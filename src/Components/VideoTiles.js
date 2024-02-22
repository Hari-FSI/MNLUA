import React from "react";
import Image from "next/image";
import NewImage from "./NewImage";
import Link from "next/link";
function VideoTiles({ field_image, field_title, youtube_link }) {
	return (
		<div className="inblock">
			<Link
				className="block-link"
				href={youtube_link}
				data-fancybox="video"
				data-caption="MAHARASHTRA NATIONAL LAW UNIVERSITY AURANGABAD A PROJECT BY PUBLIC WORKS DEPARTMENT">
				<NewImage
					src={field_image}
					alt="MAHARASHTRA NATIONAL LAW UNIVERSITY AURANGABAD A PROJECT BY PUBLIC WORKS DEPARTMENT"
					width="360"
					height="270"
				/>
				<Image
					src="/images/plaly-icon.png"
					className="pay-icon"
					alt="pay-icon"
					width="80"
					height="80"
				/>
				<p>{field_title}</p>
			</Link>
		</div>
	);
}

export default VideoTiles;
