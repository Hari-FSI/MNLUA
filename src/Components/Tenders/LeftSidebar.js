import React from "react";
import Link from "next/link";
function LeftSidebar() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <Link href="/fees-structure">Fees Structure (2)</Link>
          </li>
          <li className="">
            <Link href="/fee-notice">Fee Notice (18)</Link>
          </li>
          <li className="">
            <Link href="/admission-2022-23-notice">Admission 2022-23 (20)</Link>
          </li>
          <li className="">
            <Link href="/academics-notifications">Academics (2)</Link>
          </li>
          <li className="">
            <Link href="/corrigendum-notifications">Corrigendum(3)</Link>
          </li>
          <li className="">
            <Link href="/examination-notifications">Examination(2)</Link>
          </li>
          <li className="">
            <Link href="/mnlua-act">MNLU ACT(3)</Link>
          </li>
          {/* <li className="">
            <Link href="/tenders">Tenders(10)</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
