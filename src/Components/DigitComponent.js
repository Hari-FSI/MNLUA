import React from "react";

const DigitComponent = ({ digit }) => {
	const digitArray = String(digit).split("");

	return (
		<>
			{digitArray.map((num, index) => (
				<span key={index}>{num}</span>
			))}
		</>
	);
};

export default DigitComponent;
