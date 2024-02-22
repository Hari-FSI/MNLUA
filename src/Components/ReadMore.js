import React, { useState } from "react";

function LongText({ text }) {
	const [showFullText, setShowFullText] = useState(false);

	function toggleShowFullText() {
		setShowFullText(!showFullText);
	}

	function stripHtmlTags(html) {
		const regex = /(<([^>]+)>)/gi;
		return html.replace(regex, "");
	}
	if (text) {
		return (
			<div>
				{showFullText ? (
					<div>
						<p>
							<div
								dangerouslySetInnerHTML={{
									__html: text,
								}}
							/>
						</p>
						<p
							class="btn-sec"
							data-readmore-toggle="undefined1"
							aria-controls="undefined1">
							<a
								className="jump-link moreless-button1"
								onClick={toggleShowFullText}>
								Read less
							</a>{" "}
						</p>
					</div>
				) : (
					<div>
						<p>{stripHtmlTags(text.substring(0, 300))}...</p>{" "}
						<p
							class="btn-sec"
							data-readmore-toggle="undefined1"
							aria-controls="undefined1">
							<a
								className="jump-link moreless-button1"
								onClick={toggleShowFullText}>
								Read more
							</a>
						</p>
					</div>
				)}
			</div>
		);
	}
}

export default LongText;
