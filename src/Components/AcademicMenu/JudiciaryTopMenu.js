import React from "react";
import Link from "next/link";

function JudiciaryTopMenu() {
	return (
		<div>
			<div className="template__sidebar">
				<ul>
					<li className="">
						<h3>Distinguished Honorary Visiting Professors</h3>
						<ul className="">
							<li className="">
								<Link href="/dhvp-judiciary" aria-current="page">
									Judiciary
								</Link>
							</li>
							<li className="">
								<Link href="/dhvp-academics" aria-current="page">
									Academics
								</Link>
							</li>
							<li className="">
								<Link href="/dhvp-executive" aria-current="page">
									Executive
								</Link>
							</li>
						</ul>
					</li>
					<li className="">
						<h3>Distinguished Honorary Visiting Faculties</h3>
						<ul className="">
							<li className="">
								<Link href="/dhvf-judges" aria-current="page">
									Judges
								</Link>
							</li>
							<li className="">
								<Link href="/dhvf-advocates" aria-current="page">
									Advocates
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default JudiciaryTopMenu;
