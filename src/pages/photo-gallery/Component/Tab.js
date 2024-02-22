import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function Tab() {
	const router = useRouter();
	const initialTab = (() => {
		const currentPath = router.pathname;
		if (currentPath === "/photo-gallery/2022") {
			return "tab-2022";
		} else if (currentPath === "/photo-gallery") {
			return "tab-2023";
		} else if (currentPath === "/photo-gallery/2021") {
			return "tab-2021";
		} else {
			return "tab-2023"; // Default value
		}
	})();

	const [activeTab, setActiveTab] = useState(initialTab);
	const handleClick = (value) => () => {
		console.log(value);
		setActiveTab(value);
		if (value == "tab-2022") {
			router.push("/photo-gallery/2022");
		}

		if (value == "tab-2023") {
			router.push("/photo-gallery");
		}

		if (value == "tab-2021") {
			router.push("/photo-gallery/2021");
		}
		if (value == "tab-2020") {
			router.push("/photo-gallery/2020");
		}
		if (value == "tab-2019") {
			router.push("/photo-gallery/2019");
		}
		if (value == "tab-2018") {
			router.push("/photo-gallery/2018");
		}
	};

	return (
		<>
			<div className="tabs-fillter">
				<button
					type="button"
					className={activeTab == "tab-2023" ? "btn-active" : ""}
					onClick={handleClick("tab-2023")}>
					2023 {activeTab == "tab-2023" ? <>-</> : <>+</>}
				</button>
				<button
					type="button"
					className={activeTab == "tab-2022" ? "btn-active" : ""}
					onClick={handleClick("tab-2022")}>
					2022 {activeTab == "tab-2022" ? <>-</> : <>+</>}
				</button>
				{/* <button
					type="button"
					className={activeTab == "tab-2021" ? "btn-active" : ""}
					onClick={handleClick("tab-2021")}>
					2021 {activeTab == "tab-2021" ? <>-</> : <>+</>}
				</button> */}

				<button
					type="button"
					className={activeTab == "tab-2020" ? "btn-active" : ""}
					onClick={handleClick("tab-2020")}>
					2020 {activeTab == "tab-2020" ? <>-</> : <>+</>}
				</button>

				<button
					type="button"
					className={activeTab == "tab-2019" ? "btn-active" : ""}
					onClick={handleClick("tab-2019")}>
					2019 {activeTab == "tab-2019" ? <>-</> : <>+</>}
				</button>

				<button
					type="button"
					className={activeTab == "tab-2018" ? "btn-active" : ""}
					onClick={handleClick("tab-2018")}>
					2018 {activeTab == "tab-2018" ? <>-</> : <>+</>}
				</button>
			</div>
		</>
	);
}

export default Tab;
