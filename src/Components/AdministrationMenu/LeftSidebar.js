import React from "react";
import Link from "next/link";

function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="page_item ">
            <Link href="/administration">Administration</Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-vice-chancellor-office">
              Staff in Vice-Chancellor Office
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-registrar-office">
              Staff in Registrar Office
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-finance-accounts-office">
              Staff in Finance &amp; Accounts Office
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-engineer-office">Staff in Engineer Office</Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-examination-section-ug">
              Staff in Examination Section (U.G.)
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-library-office">Staff in Library Office</Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-examination-section-pg">
              Staff in Examination Section (P.G.)
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-dean-research-office">
              Dean (Research) Office
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-scholarship-section">
              Staff in Scholarship Section
            </Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-it-department">IT Department</Link>
          </li>
          <li className="page_item ">
            <Link href="/staff-faculty-room">Faculty Room</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
