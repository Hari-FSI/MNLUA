import React from "react";

function FileShow({ ahref, title }) {
	function processStrings(input) {
		if (ahref.indexOf(",") > -1) {
			const strings = input.split(",");

			const result = strings
				.map((str) => {
					const words = str.split(" ").filter((word) => word !== "");
					return words;
				})
				.filter((arr) => arr.length > 0);

			return result;
		} else {
			return input;
		}
	}
	const output = processStrings(ahref);

	if (ahref.indexOf(",") > -1) {
		console.log(output);
		return (
			<div>
				<h3>{title}</h3>
				{output.map((item, index) => (
					<div key={index}>
						{" "}
						<a
							className="list-group__url c-icon-pdf"
							href={item[0]}
							target="_blank">
							{item[1] + "if"}
						</a>{" "}
					</div>
				))}
			</div>
		);
	} else {
		return (
			<div>
				<a className="list-group__url c-icon-pdf" href={ahref} target="_blank">
					{title}
				</a>
			</div>
		);
	}
}

export default FileShow;
