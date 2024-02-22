import React from "react";
import Link from "next/link";

function TopMenu() {
  return (
    <div>
      <div className="second-menu hidden-xs">
        <div className="container">
          <div className="sidebar1">
            <div>
              <ul>
                <li className="">
                  <Link href="/faculty">Faculty</Link>
                </li>
                <li className="">
                  <Link href="/course-ballb-hons">Academic Programme</Link>
                </li>
                <li className="">
                  <Link href="/examinations">Examinations</Link>
                </li>
                <li className="">
                  <Link href="/management-department-bba-llb-hons">
                    Management Department
                  </Link>
                </li>
                <li className="">
                  <Link href="/publications">Publications</Link>
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
