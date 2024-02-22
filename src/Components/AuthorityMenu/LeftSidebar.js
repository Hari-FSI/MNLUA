import React from "react";
import Link from "next/link";

function LeftSidebar() {
  return (
    <div>
      <div className="">
        <button
          className="sidebartoggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#template-sidebar"
          aria-controls="template-sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-ellipsis-h" />
        </button>
        <div className="collapse navbar-collapse" id="template-sidebar">
          <div className="template__sidebar">
            <ul>
              <li className="">
                <Link href="/authorities-of-the-university">
                  Authorities Of The University
                </Link>
              </li>
              <li className="">
                <h3>University Council</h3>
                <ul className="">
                  <li className="">
                    <Link href="/general-council">General Council</Link>
                  </li>
                  <li className="">
                    <Link href="/executive-council">Executive Council</Link>
                  </li>
                  <li className="">
                    <Link href="/academic-council">Academic Council</Link>
                  </li>
                  <li className="">
                    <Link href="/building-commitee">Building Commitee</Link>
                  </li>
                  <li className="">
                    <Link href="/planning-board">Planning Board</Link>
                  </li>
                  <li className="">
                    <Link href="/finance-committee">Finance Committee</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="">
                <h3>Honorary Professors</h3>
                <ul className="">
                  <li className="">
                    <Link href="/honorary-professors" aria-current="page">
                      Judiciary
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/teaching">Teaching</Link>
                  </li>
                  <li className="">
                    <Link href="/executive" aria-current="page">
                      Executive
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="">
                <Link href="/it-advisors-information-technology">
                  IT Advisors
                </Link>
              </li>
              <li className="">
                <h3>Faculty</h3>
                <ul className="">
                  <li className="">
                    <Link href="/faculty" aria-current="page">
                      Core Faculty
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/dhvp-judiciary" aria-current="page">
                      Distinguished Honorary Visiting Professors and Faculties
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/visiting-faculty" aria-current="page">
                      Visiting Faculty
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
