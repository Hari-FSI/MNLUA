import React from "react";
import Link from "next/link";
function ClatTopManu() {
  return (
    <>
      <style jsx>{`
        .clattopmenu .navbar {
          display: flex;
          gap: 35px;
          list-style: none;
          margin: 0;
          padding: 10px 0;
        }
      `}</style>
      <div className="tabbable-line clattopmenu">
        <ul lassName="navbar ">
          <li lassName="active">
            <Link href="/clat-2023">Contact Details</Link>
          </li>
          <li>
            <Link href="/clat-2023-fee-details">Fee Details</Link>
          </li>
          <li>
            <Link href="/clat-2023-notification">Notifications</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ClatTopManu;
