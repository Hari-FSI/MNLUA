import React, { useState } from "react";
import Notification from "./Notifications";
import Admissions from "./Admissions";
import Mnlu from "./Mnlu";

function WhatNew({ notification, admission, mnlu }) {
	//console.log(admission);
	const [active, setActive] = useState("Notifications");

	const shoot = (a) => {
		setActive(a);
	};

	return (
		<div>
			{" "}
			
			<div className="tab-content">
				{active == "Notifications" ? (
					<Notification notification={notification} />
				) : (
					""
				)}
				{active == "Admissions" ? <Admissions admission={admission} /> : ""}
				{active == "MNLU" ? <Mnlu mnlu={mnlu} /> : ""}
			</div>
		</div>
	);
}

export default WhatNew;
