import React from "react";
import Link from "next/link";
function TopMenu() {
  return (
    <div>
      <style jsx>{`
        .sidebar1 ul li a {
          padding: 16px 14px;
          font-size: 15px;
        }
      `}</style>
      <div className="second-menu">
        <div className="container-fluid">
          <div className="sidebar1">
            <div>
              <ul>
                <li className="">
                  <Link href="/library">MNLU-A Library</Link>
                </li>
                <li className="">
                  <Link href="/print-resources">Print Resources </Link>
                </li>
                <li className="">
                  <Link href="/e-resources">Online Resources</Link>
                </li>
                <li className="">
                  <Link href="/d-space-ir">D-Space (IR)</Link>
                </li>
                <li className="">
                  <Link href="/library-access">Library Access</Link>
                </li>
                <li className="">
                  <Link href="/services">Services</Link>
                </li>
                <li className="">
                  <Link href="/rules-regulation">Rules &amp; Regulation</Link>
                </li>
                <li className="">
                  <Link href="/library-contact">Contact </Link>
                </li>
                <li className="">
                  <Link href="/library-events">Library Events</Link>
                </li>
              </ul>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n.sidebar1 ul li a {padding: 16px 16px; font-size: 15px;}\n.second-menu ,\n.sidebar1{ background: #f7f3ec;}\n",
              }}
            />
          </div>
        </div>
      </div>
      <section className="library-search-marque-sec">
        <div className="container">
          <div className="library-marque">
            <div className="marque-title">
              NEWS <i className="fa fa-caret-right" aria-hidden="true" />
            </div>
            <marquee
              behavior="scroll"
              gap={0}
              truespeed=""
              direction="left"
              scrollamount={4}
              scrolldelay={50}
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              <a href="pdf/Academic-Calendar-UG-2023.pdf" target="_blank">
                ACADEMIC CALENDAR UG BATCH - 2023
              </a>
              |
              <a href="pdf/Academic-Calendar-UG-2023.pdf" target="_blank">
                ACADEMIC CALENDAR UG BATCH - 2023
              </a>
            </marquee>
            <div className="marque-link">
              <a href="#">View all</a>
            </div>
          </div>
        </div>
      </section>
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" noValidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                    <a
                      href="https://mnlua.mapmyelibrary.com/"
                      target="_blank"
                      className="btn btn-danger wrn-btn"
                      style={{ fontSize: 16 }}
                    >
                      <strong>
                        SEARCH OPAC : https://mnlua.mapmyelibrary.com/
                      </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TopMenu;
