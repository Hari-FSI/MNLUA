import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function TopMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <style>
        {`
        .nav-nav-tabs {
          display: flex;
          gap: 35px;
          list-style: none;
          padding: 0 10px;
          font-size: 16px;
          margin: 0;
          flex-wrap: wrap;
          border-bottom: 1px solid #eee;
          margin-bottom: 10px;
        }
        .nav-nav-tabs li.active {
          border-bottom: 3px solid #f3565d;
        }
        .nav-nav-tabs li:hover {
          border-bottom: 3px solid #e4414c5e;
          position: relative;
        }
        .nav-nav-tabs li {
          padding: 10px 0 5px 0;
        }

        // tab nav css

        #topmenu .tabs {
          display: flex;
          border: 1px solid #ddd;
        }
  
        #topmenu .tabs > .tab {
          flex: 1;
          display: flex;
        }
  
        #topmenu .tab .link > .tab-input {
          width: 0;
          height: 0;
          margin: 0;
          display: none;
        }
  
        #topmenu .tab .link > .tab-box {
          padding: 0.5rem;
          width: 100%;
          text-align: center;
          transition: 0.5s;
          border-bottom: 2px solid rgba(0, 0, 0, 0);
        }
  
        #topmenu .tab > .tab-input:checked + .tab-box {
          background:#000;
          border-color: #000;
        }
        #topmenu .tabs{
          display:flex;
          gap:10px;
        }
        @media only screen and (max-device-width: 480px) {
          .nav-nav-tabs li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            margin:0 10px;
          }
          .nav-nav-tabs {
            display: flex;
            gap: 10px;
            list-style: none;
            padding: 0 10px;
            // flex-direction: column;
            font-size: 16px;
            flex-wrap: wrap;
            border-bottom: 1px solid #fff;
            margin-bottom: 20px;
            width: 100%;
          }
        }
      `}
      </style>
      <div>
        <ul className="nav-nav-tabs ">
          <li
            className={
              currentRoute === "/clat-2023-notification" ? "active" : ""
            }
          >
            <Link className="clr" href="/clat-2023-notification">
              Notifications
            </Link>
          </li>
          <li
            className={
              currentRoute === "/clat-2023-fee-details" ? "active" : ""
            }
          >
            <Link href="/clat-2023-fee-details">Fee Details</Link>
          </li>

          <li
            className={
              currentRoute === "/clat-2023-fee-payment-link" ? "active" : ""
            }
          >
            <Link className="" href="/clat-2023-fee-payment-link">
              Fee Payment Link
            </Link>
          </li>
          <li className={currentRoute === "/clat-2023" ? "active" : ""}>
            <Link href="/clat-2023">Contact Details</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopMenu;
