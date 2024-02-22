import React from "react";
import Link from "next/link";
function AdmissionTopMenu() {
  return (
    <div>
      <div className="second-menu">
        <div className="container">
          <div className="sidebar1">
            <div>
              <ul>
                <li className="">
                  <Link href="/admission-form">Admission Enquiry</Link>
                </li>
                <li className="">
                  <Link href="/admissions-notifications">Notifications</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionTopMenu;
