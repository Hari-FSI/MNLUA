import React from "react";
import Link from "next/link";
import Image from "next/image";

function Admissions({ admission }) {
	console.log(admission);
	function convertDateFormat(arr) {
		const updatedArr = arr.map((item) => {
			const date = item.field_date.trim();
			let day, month, year;

			if (date.includes(",")) {
				const dateParts = date.split(/\s+/);
				day = dateParts[0];
				month = dateParts[1].replace(",", "").slice(0, 3);
				year = dateParts[2];
			} else if (date.includes("-")) {
				const dateParts = date.split("-");
				day = dateParts[2];
				month = new Date(date).toLocaleString("default", { month: "short" });
				year = dateParts[0];
			}

			const formattedDate = {
				field_day: day,
				field_month: month,
				field_year: year,
			};
			return {
				...item,
				...formattedDate,
			};
		});
		return updatedArr;
	}

	const updatedNotification = convertDateFormat(admission);
	return (
		<div>
			<div className="tab-pane active" id="one">
				<div id="transformed">
					<div id="list">
						<div className="row">
							{" "}
							{updatedNotification.map((item, index) => (
								<div key={index} className="col-md-4">
									<div className="div-table">
										<aside className="date-cell">
											<h4>
												<a href={item.field_link} target="_blank">
													<strong>{item.field_month}</strong>
													<span className="number">{item.field_day}</span>{" "}
													<span className="year">{item.field_year}</span>
												</a>
											</h4>
										</aside>
										<aside className="content-cell">
											{" "}
											<a href={item.field_link} target="_blank">
												<div>
													{item.field_new == "1" ? (
														<Image
															src="/images/new-taq.gif"
															alt="new"
															width="46"
															height="21"
														/>
													) : (
														""
													)}
												</div>
												<p>{item.title}</p>
											</a>
										</aside>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="clearfix" />
				<div className="text-center">
					<Link href="fee-notice" className="btn-border">
						View All
					</Link>
				</div>
				<div className="clearfix" />
			</div>
		</div>
	);
}

export default Admissions;
