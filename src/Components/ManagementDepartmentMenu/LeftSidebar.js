import React from "react";
import Link from "next/link";
function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <h3>School of Management</h3>
            <ul>
              <li>
                <h3>UG Programmes</h3>
                <ul>
                  <li className="">
                    <Link href="/management-department-bba-llb-hons">
                      B.B.A. LL.B. (Hons.)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Integrated Programmes</h3>
                <ul>
                  <li className="">
                    <Link href="/management-department-5y-bba-mba">
                      B.B.A. MBA (Law and Management)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h3>PG Programmes</h3>
                <ul>
                  <li>
                    <h3>Regular (Full-Time)</h3>
                    <ul>
                      <li className="">
                        <Link href="/management-department-2y-mba-programme">
                          MBA (Financial Services and Court Administration)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>Executive Programmes (Part-Time)</h3>
                    <ul>
                      <li className="">
                        <Link href="/management-department-2y-executive-mba">
                          MBA (Law of Financial Services and Financial
                          Technology)
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/management-department-2y-executive-mba-mlhm">
                          MBA (Medical Laws and Hospital Management)
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
