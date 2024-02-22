import React from "react";
import Link from "next/link";

function SideNav() {
  return (
    <>
      <style jsx>{`
        .nav_bar {
          width: 315px;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        }
        .dropdown {
          background: #f2f2f2;
        }
        .nav_bar ul li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav_bar ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav_bar li {
          padding: 10px 15px;
        }
        .nav_bar .side_menu li .link {
          font-size: 15px;
          transition: 0.3s;
          color: #000;
          padding: 10px 15px;
          cursor: pointer;
          display: block;
        }
        .nav_bar .side_menu li .dropdown span:hover {
          background: #4b4082;
          color: #fff;
        }
        .nav_bar .side_menu li .dropdown span {
          padding: 4px 0 4px 4px;
          font-size: 15px;
          margin-left: 15px;
          cursor: pointer;
          display: block;
          transition: 0.3s;
          color: #333;
        }
        .border-b {
          border-bottom: 1px solid #ddd;
        }
        .hms-mobilemenu {
          position: absolute;
          z-index: 9999999;
          right: 0px;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
          width: 315px;
          display: block;
          background-color: #fff;
        }
      `}</style>

      <div className="container">
        <nav className="nav_bar hms-mobilemenu">
          <ul className="side_menu">
            <li className="on_click border-b">
              <span className="link" onClick={() => setShow(!show)}>
                ABOUT <span className="caret" />
              </span>
              {/* Dropdown level 1 */}
              {show && (
                <ul className="dropdown">
                  <li>
                    <Link target="_blank" href="/about">
                      <span>About MNLUA</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/infrastructure">
                      <span>Infrastructure</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="rti">
                      <span>RTI</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/authorities-of-the-university">
                      <span>Authorities</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="on_click border-b">
              <span className="link" onClick={() => setShow(!show)}>
                ADMINISTRATION <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/chancellor-message">
                    <span>Chancellor Message</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pro-chancellor-message">
                    <span>Pro Chancellor Message</span>
                  </Link>
                </li>
                <li>
                  <Link href="/vc-message">
                    <span>VC Message</span>
                  </Link>
                </li>
                <li>
                  <Link href="/registrar">
                    <span>Registrar Message</span>
                  </Link>
                </li>
                <li>
                  <Link href="/administration">
                    <span>Administration</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="on_click border-b">
              <span className="link">
                ACADEMICS <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/faculty">
                    <span>Faculty</span>
                  </Link>
                </li>
                <li>
                  <Link href="/course-ballb-hons">
                    <span>Academic Programme</span>
                  </Link>
                </li>
                <li>
                  <Link href="/examinations"></Link>
                  <span>Examinations</span>
                </li>
                <li>
                  <Link href="management-department-bba-llb-hons">
                    <span>Management Department</span>
                  </Link>
                </li>
                <li>
                  <Link href="/publications"></Link>
                  <span>Publications</span>
                </li>
              </ul>
            </li>
            <li className="on_click border-b">
              <span className="link">
                ADMISSIONS <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/admission-form"></Link>
                  <span>Admission Enquiry</span>
                </li>
                <li>
                  <Link href="/clat-2023"></Link>
                  <span>Notifications</span>
                </li>
              </ul>
            </li>
            <li className="nav_link border-b">
              <Link href="/research-about-office">
                <span className="link">RESEARCH</span>
              </Link>
            </li>
            <li className="nav_link border-b">
              <Link href="centres">
                <span className="link">CENTRES</span>
              </Link>
            </li>
            <li className="nav_link border-b">
              <span className="link">
                MEDIA <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/photo-gallery">
                    <span>Photo Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="/video-gallery">
                    <span>Video Gallery</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="click border-b">
              <span className="link">
                STUDENT’S CORNER <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/student-bar-council">
                    <span>Student Bar Council</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pdf/Student-Bar-Council-Constitution-2022"
                    target="_blank"
                  >
                    <span>Student Bar Council Constitution, 2022</span>
                  </Link>
                </li>
                <li>
                  <Link href="/elected-student-committee-convenors">
                    <span>Elected Student Committee Convenors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/anti-ragging">
                    <span>Anti-Ragging</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hostel">
                    <span>Hostel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/fees-structure">
                    <span> Fees Structure</span>
                  </Link>
                </li>
                <li>
                  <Link href="/fee-notice">
                    <span> Fee Notice</span>
                  </Link>
                </li>
                <li>
                  <Link href="/complaints">
                    <span> Complaints</span>
                  </Link>
                </li>
                <li>
                  <Link href="/feedback">
                    <span> Feedback</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav_link border-b">
              <Link href="library">
                <span className="link"> LIBRARY</span>
              </Link>
            </li>
            <li className="nav_link border-b">
              <Link href="/tenders">
                <span className="link"> TENDERS</span>
              </Link>
            </li>
            <li className="click border-b">
              <span className="link">
                PLACEMENT <span className="caret" />
              </span>
              {/* Dropdown level 1 */}

              <ul className="dropdown">
                <li>
                  <Link href="/placement-committee">
                    <span>Placement Committee</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pdf/Placement-Brochure-Batch-2018-23"
                    target="_blank"
                  >
                    <span>Placement Brochure</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav_link border-b">
              <Link href="/iqac">
                <span className="link">IQAC</span>
              </Link>
            </li>
            <li className="nav_link border-b">
              <Link href="/contact">
                <span className="link">CONTACT US</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
