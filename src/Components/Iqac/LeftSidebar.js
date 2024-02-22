import React from "react";
import Link from "next/link";
function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <Link
              className="list-group__url c-icon-pdf"
              href="/pdf/NAAC-MANUAL.pdf"
              target="_blank"
            >
              NAAC MANUAL{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
