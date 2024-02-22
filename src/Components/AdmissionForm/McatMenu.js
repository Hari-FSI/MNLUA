import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function McatMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <style>
        {`
        .McatMenu {
          display: flex;
          gap: 35px;
          list-style: none;
          padding: 0 10px;
          font-size: 16px;
          border-bottom: 1px solid #eee;
          margin-bottom: 15px;
       
        }
        .McatMenu li.active {
          border-bottom: 3px solid #f3565d;
        }
        .McatMenu li:hover {
          border-bottom: 3px solid #e4414c5e;
          position: relative;
        }
        .McatMenu li {
          padding: 10px 0 6px 0;
        }
        // Tab radio
        .tabs {
          --bar-color: red;
          --background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #e0e0e0);
  
          display: flex;
          width: 600px;
          border: 1px solid #ddd;
        }
  
        .tabs > .tab {
          flex: 1;
          display: flex;
        }
  
        .tab > .tab-input {
          width: 0;
          height: 0;
          margin: 0;
          display: none;
        }
  
        .tab > .tab-box {
          padding: 0.5rem;
          width: 100%;
          text-align: center;
          transition: 0.5s;
          border-bottom: 2px solid rgba(0, 0, 0, 0);
        }
  
        .tab > .tab-input:checked + .tab-box {
          background: var(--background);
          border-color: var(--bar-color);
        }
        @media only screen and (max-device-width: 480px) {
          .McatMenu li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
          }
          .McatMenu {
            display: flex;
            gap: 15px;
            list-style: none;
            padding: 0 10px;
            // flex-direction: column;
            font-size: 16px;
            flex-wrap: wrap;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
            width: 100%;
          }
      }
       
      `}
      </style>
      <div>
        <ul className="nav-nav-tabs McatMenu">
          <li
            className={
              currentRoute === "/b-b-a-m-b-a-programme" ? "active" : ""
            }
          >
            <Link href="/b-b-a-m-b-a-programme">Contact Details</Link>
          </li>
          {/* <li>
            <Link href="/clat-2023-fee-details">Fee Details</Link>
          </li> */}
          <li
            className={
              currentRoute === "/m-cat-2023-notifications" ? "active" : ""
            }
          >
            <Link href="/m-cat-2023-notifications">Notifications</Link>
          </li>
        </ul>
        {/* <div class="tabs">
          <label class="tab">
            <input type="radio" name="tab-input" class="tab-input" />
            <Link href="" class="tab-box">
              Option 3
            </Link>
          </label>
          <label class="tab">
            <input type="radio" name="tab-input" class="tab-input" />
            <Link href="" class="tab-box">
              Option 4
            </Link>
          </label>
        </div> */}
      </div>
    </>
  );
}

export default McatMenu;
