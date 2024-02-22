import React from "react";
import Link from "next/link";
function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <Link href="/clat-2023">CLAT 2023</Link>
          </li>
          <li className="">
            <Link href="/b-b-a-m-b-a-programme">M-CAT-2023</Link>
          </li>
          <li className="">
            <Link href="/phd-admissions-notifications">
              PH. D. ADMISSIONS 2022-23
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
