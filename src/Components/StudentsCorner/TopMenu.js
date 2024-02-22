import React from "react";
import Link from "next/link";
import Image from "next/image";
function TopMenu() {
  return (
    <div>
      <div class="second-menu">
        <div class="container">
          <div class="sidebar1">
            <div>
              <ul>
                <li class="">
                  <Link href="/student-bar-council">Student Bar Council</Link>
                </li>
                <li>
                  <Link
                    href="/pdf/Student-Bar-Council-Constitution-2022.pdf"
                    target="_blank"
                  >
                    Student Bar Council Constitution, 2022
                  </Link>
                </li>
                <li class="">
                  <Link href="/elected-student-committee-convenors">
                    Elected Student Committee Convenors
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
