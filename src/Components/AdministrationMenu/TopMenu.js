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
                  <Link href="/chancellor-message">Chancellor Message</Link>
                </li>
                <li className="">
                  <Link href="/pro-chancellor-message">
                    Pro Chancellor Message
                  </Link>
                </li>
                <li className="">
                  <Link href="/vc-message">VC Message</Link>
                </li>
                <li className="">
                  <Link href="/registrar">Registrar Message</Link>
                </li>
                <li className="">
                  <Link href="/administration">Administration</Link>
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
