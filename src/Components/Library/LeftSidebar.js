import React from "react";
import Link from "next/link";
function LeftSidebar() {
	return (
		<div>
			<div className="template__sidebar">
				<ul>
					<li>
						<Link
							href="http://mnlua.mapmyelibrary.com/cgi-bin/koha/opac-main.pl?logout.x=1"
							target="_blank">
							Account Login
						</Link>
					</li>
					<li className="">
						<Link href="/library-remote-access">Remote Access</Link>
					</li>
					<li>
						<Link
							href="https://mnluau.turnitin.com/home/sign-in"
							target="_blank">
							Plagiarism check
						</Link>
					</li>
					<li className="">
						<Link href="#">New Arrivals</Link>
					</li>
					<li className="">
						<Link href="/library-online-payment">Online Payment</Link>
					</li>
					<li className="">
						<Link href="/library-downloads">Downloads</Link>
					</li>
					<li className="">
						<Link href="/library-team">Library Team</Link>
					</li>
					<li className="">
						<Link href="/book-requisition">Book Requisition</Link>
					</li>
					<li className="">
						<Link href="/ask-librarian">Ask a Librarian</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftSidebar;
