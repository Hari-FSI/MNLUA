import React from "react";
import Link from "next/link";
import Image from "next/image";

function Notifications({ notification }) {
	console.log(notification);

	function formatDate(dateString) {
		const dateObj = new Date(dateString);

		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const month = monthNames[dateObj.getMonth()];
		const day = dateObj.getDate();
		const year = dateObj.getFullYear();

		const formattedDate = `<strong>${month}</strong> <span class="number">${day}</span> <span class="year">${year}</span>`;

		return formattedDate;
	}

	function convertDateFormat(arr) {
		const updatedArr = arr.map((item) => {
			const dateParts = item.field_date.trim().split(/\s+/);
			const day = dateParts[0];
			const month = dateParts[1].replace(",", "").slice(0, 3);
			const year = dateParts[2];
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

	const updatedNotification = convertDateFormat(notification);
	//console.log(updatedNotification);

	return (
		<div>
			<div className="tab-pane active" id="one">
				<div id="transformed">
					<div id="list">
						<div className="notication-list">
							{" "}
							{updatedNotification.map((item, index) => (
								<div key={index} className="col-md-12">
										<aside className="notifyblock">
											
											{" "}
											<a href={item.field_link} target="_blank">
												
												<p>{item.title} {item.field_new == "1" ? (
														<Image
															src="/images/new-taq.gif"
															alt="new"
															width="46"
															height="21"
														/>
													) : (
														""
													)}</p>
											</a>
											<p className="date">
												{" "}
												<a href={item.field_link} target="_blank">
												<span className="span">
												<span className="number">{item.field_day} </span>
												<span className="number">{item.field_month} </span>
												<span className="number">{item.field_year}</span>
												</span>
													<span className="type-note">General</span>
												</a>
											</p>
										</aside>
									</div>
							))}
						</div>
					</div>
				</div>
				<div className="clearfix" />
				
			</div>
		</div>
	);
}

export default Notifications;
