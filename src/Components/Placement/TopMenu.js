import React from "react";
import Link from "next/link";
function TopMenu() {
  return (
    <div>
      <div className="second-menu">
        <div className="container">
          <div className="sidebar1">
            <div>
              <ul>
                <li className="">
                  <Link href="/placement-committee">Placement Committee</Link>
                </li>
                <li>
                  <Link
                    href="/pdf/Placement-Brochure-Batch-2018-23.pdf"
                    target="_blank"
                  >
                    Placement Brochure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
