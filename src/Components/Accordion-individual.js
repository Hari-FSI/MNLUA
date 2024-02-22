import React, { useState } from "react";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);
	console.log(content);
	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<div class="panel-heading" role="tab" id="headingOne">
					<h4 class="panel-title">{title}</h4>
				</div>
				<div>{isActive ? "-" : "+"}</div>
			</div>
			{isActive && (
				<div className="accordion-content">
					<div
						className="accordian-contents"
						dangerouslySetInnerHTML={{
							__html: content,
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default Accordion;
