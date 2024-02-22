import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
function TopSecondMenu() {
  const pathname = usePathname();
  return (
    <div>
      <div className="page-submenu">
        <div className="container">
          <div className="faculty__listing__filter">
            <Link
              href="/faculty"
              className={pathname == "/faculty" ? "active" : ""}
            >
              Core Faculty
            </Link>

            <Link
              href="/dhvp-judiciary"
              className={pathname == "/dhvp-judiciary" ? "active" : ""}
            >
              Distinguished Honorary Visiting Professors and Faculties
            </Link>
            <Link
              href="/visiting-faculty"
              className={pathname == "/visiting-faculty" ? "active" : ""}
            >
              Visiting Faculty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSecondMenu;
