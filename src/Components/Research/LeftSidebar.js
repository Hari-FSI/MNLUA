import React from "react";
import Link from "next/link";
function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <Link href="/research-about-office">About the office</Link>
          </li>
          <li className="">
            <Link href="/research-post-doctoral-research-committee">
              Post-Doctoral Research Committee&nbsp;
            </Link>
          </li>
          <li className="">
            <Link href="/research-doctoral-research-committee">
              Doctoral Research Committee
            </Link>
          </li>
          <li className="">
            <Link href="/research-regulation-lld-2020">
              MNLUA Regulation LLD - 2020
            </Link>
          </li>
          <li className="">
            <Link href="/research-regulation-phd-in-Law-2020">
              MNLUA Regulation PhD in Law - 2020&nbsp;
            </Link>
          </li>
          <li className="">
            <Link href="/research-regulation-phd-in-management-2022">
              MNLUA Regulation PhD in Management - 2022
            </Link>
          </li>
          <li className="">
            <Link href="/research-regulation-phd-in-Law-2022">
              MNLUA Regulation PhD in Law - 2022&nbsp;
            </Link>
          </li>
          <li className="">
            <Link href="/research-guide-list-for-lld">Guide List for LLD</Link>
          </li>
          <li className="">
            <Link href="/research-guide-list-for-phd">
              Guide List for Ph.D.
            </Link>
          </li>
          <li className="">
            <Link href="/research-scholars-admission">Research Scholars</Link>
          </li>
          {/* <li className="">
            <Link href="/research-scholars-phd-admission-2021-24">
              Research Scholars (Ph.D. Admission 2021-24)
            </Link>
          </li> */}
          <li className="">
            <Link href="/research-lld-phd-events">
              LLD &amp; Ph.D. Events&nbsp;
            </Link>
          </li>
          <li className="">
            <Link href="/research-contact">Contact&nbsp;</Link>
          </li>
          <li className="">
            <Link href="/research-downloads">Downloads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
