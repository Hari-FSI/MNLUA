import { useEffect, useState } from "react";
import FileShow from "../FileShow";
function Details({ id }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`/api/get/fetchQuery?arg=pdf-list/${id}`)
			.then((response) => response.json())
			.then((data) => setData(data.data));
	}, []);

	if (data.length == 0) {
		return <>Loading. </>;
	} else if (data?.content == "[]") {
		return <>No PDF Available. </>;
	} else {
		return (
			<>
				{data.map((item, index) => (
					<div key={index}>
						<li className="list-group__item ">
							<div
								className="list-group__body list-group__body--s"
								itemprop="name">
								{item.field_new == "On" ? (
									<span className="new-img-gif"></span>
								) : (
									""
								)}
								<h3>
									<FileShow
										ahref={item.field_file}
										title={item.title}
										desc={item.field_file_1}
									/>
								</h3>
								<ul className="noti-info">
									<li>
										<i className="fa fa-calendar"></i> {item.field_date}
									</li>
								</ul>
							</div>
						</li>
					</div>
				))}
				{JSON.stringify(data.data, 2)}
			</>
		);
	}
}

export default Details;
