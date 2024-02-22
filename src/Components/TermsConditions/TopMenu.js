import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TopMenu() {
  const pathname = usePathname();
  return (
    <div>
      <div className="second-menu hidden-xs">
        <div className="container">
          <div className="sidebar1">
            <ul>
              <li>
                <Link
                  href="/terms-conditions"
                  className={pathname == "/terms-conditions" ? "active" : ""}
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/pricacy-policy"
                  className={pathname == "/pricacy-policy" ? "active" : ""}
                >
                  Privacy Ploicy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
