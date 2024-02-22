import React, { useEffect, useState } from "react";
import Marque from "../Components/Marque";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Translate from "./Translate";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";

function Header({ notification }) {
  const len = notification.length;
  const pathname = usePathname();
  function increaseFontSize() {
    var elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a");
    for (var i = 0; i < elements.length; i++) {
      var fontSize = parseInt(window.getComputedStyle(elements[i]).fontSize);
      elements[i].style.fontSize = fontSize + 2 + "px";
    }
  }

  function reloadPage() {
    window.location.reload();
  }

  function decreaseFontSize() {
    var elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a");
    for (var i = 0; i < elements.length; i++) {
      var fontSize = parseInt(window.getComputedStyle(elements[i]).fontSize);
      elements[i].style.fontSize = fontSize - 2 + "px";
    }
  }

  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // convert 0 to 12
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const formattedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}, ${hours}:${minutes} ${ampm}`;

  const [show, toggleShow] = React.useState(false);

  useEffect(() => {
    toggleShow(false); // close menu if path changes!
  }, [pathname]);

  const Router = useRouter();
  let [showNotice, setNotice] = useState(1);

  function closeNotice() {
    setNotice(!showNotice);
  }

  let [isActive, setActive] = useState(false);
  function openNav() {
    setActive(!isActive);
  }

  function hoverNavTitle() {
    setActive((isActive = false));
  }

  let [isMobMenuLevel, setMobMenuLevel] = useState("");

  function mobMenuLevel(level) {
    setMobMenuLevel(level);
  }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  const [isActivemenu, setIsActivemenu] = useState(false);

  const menuOpen = () => {
    setIsActivemenu(!isActivemenu);
  };

  const [isDropdownOpen, setDropdownOpen] = useState([false, false]);

  const toggleDropdown = (index) => {
    const updatedDropdownState = [...isDropdownOpen];
    updatedDropdownState[index] = !updatedDropdownState[index];
    setDropdownOpen(updatedDropdownState);
  };

  return (
    <div>
      <header className={scroll ? "header fixed" : "header"}>
        {showNotice ? (
          <>
            {/* 
              <div className="alert alert-info top-alert-info alert-dismissible">
              <div className="container-fluid">
                <a
                  className="close"
                  data-dismiss="alert"
                  aria-label="close"
                  onClick={closeNotice}
                >
                  ×
                </a>
                <Marquee
                  className="marque"
                  pauseOnHover={true}
                  direction="left"
                >
                  {" "}
                  <Marque notifications={notification} />
                </Marquee>
              </div>
            </div>*/}
          </>
        ) : (
          <></>
        )}

        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="top-bar-left col-md-5 hide-xs">
                  <ul className="list-inline">
                    <li>
                        <a href="mailto:registrar@mnlua.ac.in">
                          <i className="fa fa-envelope" aria-hidden="true" />
                          registrar@mnlua.ac.in
                        </a>
                    </li>
                    <li>
                        <a href="tel:(0240) 2953575">
                          <i className="fa fa-phone" aria-hidden="true" />
                          (0240) 2953575
                        </a>
                    </li>
                  </ul>
                </div>
                <div className="top-bar-right col-md-7">
                  <ul className="list-inline">
                    <li>
                    <Link href="/tenders"> Tender</Link>
                    </li>
                    <li className="hide-xs">
                    <Link href="/downloads"> Downloads</Link>
                    </li>
                    <li className="hide-xs">
                    <Link href="/policies"> Policies</Link>
                    </li>
                    <li className="hide-xs">
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link className="white-btn-round" href="/clat-2023-notification"><i class="fa fa-university"></i> CLAT (Admissions)</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
      
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
        <button type="button" onClick={menuOpen} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      
          <div className="navbar-brand" href="/">
          <Image
          src="/img/logo-2.png"
          alt="logo"
          width="89"
          height="101"
          />
          <div className="dept">
          <h2>Maharashtra National Law University, Aurangabad</h2>
          <h4>
          Established under Maharashtra National Law University Act,
          2014 and Recognized by the BCI
          </h4>
          </div>
          <Link href="/" className="link-brand"></Link>
          </div>

        </div>
        <div id="mobilemenu" className={isActivemenu ? "Open collapse navbar-collapse" : "collapse navbar-collapse"}>
          <ul className="nav navbar-nav navbar-right">

          <li><Link href="/"> <i className="fa fa-home" /></Link></li>
          <li className="dropdown mega-dropdown">
              <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(0)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[0]}
              href="javascript:void(0);" 
              > 
              About MNLU-A <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[0] ? 'Open dropdown-menu mega-dropdown-menu' : 'dropdown-menu mega-dropdown-menu'}>
              <div className="row">
              <div className="col-md-3">
               <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(101)}
               aria-expanded={isDropdownOpen[101]}>About MNLU-A <span className="caret"></span></h3>
               <ul className={isDropdownOpen[101] ? "m-open" : "m-close"}>
                <li><Link href="/about">Why MNLU-A </Link></li>
                <li><Link href="/about">Vision & Mission</Link></li>
              </ul>
              </div>

              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(102)}
               aria-expanded={isDropdownOpen[102]}>Statutory Documents <span className="caret"></span></h3>
               <ul className={isDropdownOpen[102] ? "m-open" : "m-close"}>
                <li><Link target="_blank" href="/pdf/policies/UGC-Recognition-Letter.pdf">Act</Link></li>
                <li><Link target="_blank" href="/pdf/policies/BCI-Affiliation-and-Recognition-Letter.pdf">Affiliation- BCI & UGC</Link></li>
              </ul>
              </div>

              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(103)}
               aria-expanded={isDropdownOpen[103]}>Facilities <span className="caret"></span></h3>
               <ul className={isDropdownOpen[103] ? "m-open" : "m-close"}>
                <li><Link href="/">IT</Link></li>
                <li><Link href="/">Living & Dining</Link></li>
                <li><Link href="/">Sport Facility</Link></li>
                <li><Link href="/">Guest & Faculty Accommodation</Link></li>
              </ul>
              </div>
              </div>

              <div className="col-md-3">
               <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(104)}
               aria-expanded={isDropdownOpen[104]}>Regulations <span className="caret"></span></h3>
               <ul className={isDropdownOpen[104] ? "m-open" : "m-close"}>
                <li><Link target="_blank" href="/pdf/regulations/Examination-Regulations.pdf">Examination Regulation</Link></li>
                <li><Link target="_blank" href="/pdf/regulations/Hostel-Regulations.pdf">Hostel Regulation</Link></li>
                <li><Link target="_blank" href="/pdf/regulations/Endowment-Regulations.pdf">Endowment Regulation</Link></li>
              </ul>
              </div>

              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(105)}
               aria-expanded={isDropdownOpen[105]}>University Authorities <span className="caret"></span></h3>
               <ul className={isDropdownOpen[105] ? "m-open" : "m-close"}>
                <li><Link href="/chancellor-message">Chancellor</Link></li>
                <li><Link href="/pro-chancellor-message">Pro-Chancellor</Link></li>
                <li><Link href="/vc-message">Vice-Chancellor</Link></li>
                <li><Link href="/registrar">Registrar</Link></li>
              </ul>
              </div>

              <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(106)}
               aria-expanded={isDropdownOpen[106]}>Careers <span className="caret"></span></h3>
               <ul className={isDropdownOpen[106] ? "m-open" : "m-close"}>
                <li><Link href="/">Advertisement</Link></li>
              </ul>
              </div>
              </div>

              <div className="col-md-3">
               <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(107)}
               aria-expanded={isDropdownOpen[107]}>Statutory Bodies <span className="caret"></span></h3>
               <ul className={isDropdownOpen[107] ? "m-open" : "m-close"}>
                <li><Link href="/">General Council</Link></li>
                <li><Link href="/">Executive Council</Link></li>
                <li><Link href="/">Academic Council</Link></li>
                <li><Link href="/">Building Committee</Link></li>
                <li><Link href="/">Planning Board</Link></li>
                <li><Link href="/">Finance Committee</Link></li>

              </ul>
              </div>

              <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(108)}
               aria-expanded={isDropdownOpen[108]}>University Officials <span className="caret"></span></h3>
               <ul className={isDropdownOpen[108] ? "m-open" : "m-close"}>
                <li><Link href="/">Finance and Accounts Officer</Link></li>
                <li><Link href="/">Librarian</Link></li>
                <li><Link href="/">Dy. Registrar</Link></li>
                <li><Link href="/">Officer on Special Duty</Link></li>
                <li><Link href="/">Administrative Officer</Link></li>
              </ul>
              </div>
              </div>

              <div className="col-md-3">
               <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(109)}
               aria-expanded={isDropdownOpen[109]}>Publications <span className="caret"></span></h3>
               <ul className={isDropdownOpen[109] ? "m-open" : "m-close"}>
                <li><Link href="/">Republic Law Review</Link></li>
                <li><Link href="/">Comparative Law Review</Link></li>
                <li><Link href="/">MNLU-A First International Affairs Digest</Link></li>
                <li><Link href="/">Comparative Law: Newsletter</Link></li>
                <li><Link target="_blank" href="/pdf/publications/Calender.pdf">Calendar</Link></li>

              </ul>
              </div>

              <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(110)}
               aria-expanded={isDropdownOpen[110]}>Special Cell <span className="caret"></span></h3>
               <ul className={isDropdownOpen[110] ? "m-open" : "m-close"}>
                <li><Link href="/">IQAC</Link></li>
                <li><Link href="/">Faculty Committees</Link></li>
                <li><Link href="/">RTI</Link></li>
                <li><Link href="/">ST/SC</Link></li>
                <li><Link href="/">Internal Complaints Committee</Link></li>
                <li><Link href="/">Anti-Ragging Harassment & Redressal</Link></li>
              </ul>
              </div>

              </div>
              <div className="col-md-12 text-center">
              <Link className="btn-blue" href="/">Centers</Link>
              <Link className="btn-blue" href="/">MOUs</Link>
              <Link className="btn-blue" href="/">LIBRARY</Link>
              </div>

              </div>  

             
             
              </div>
            </li>
            <li className="dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(1)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[1]}
              href="javascript:void(0);"
              > 
              Faculty <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[1] ? "Open dropdown-menu" : "dropdown-menu"}>
              <ul>
                <li><Link href="/dhvp-judiciary">Distinguish Professors & Faculties</Link></li>
                <li><Link href="/faculty">Core Faculty</Link></li>
                <li><Link href="/visiting-faculty">Visiting Faculty</Link></li>
              </ul>
              </div>
            </li>

            <li className="dropdown mega-dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(2)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[2]}
              href="javascript:void(0);"
              > 
              Academics <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[2] ? "Open dropdown-menu mega-dropdown-menu" : "dropdown-menu mega-dropdown-menu"}>
              <div className="row">
              <div className="col-md-4">
               <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(111)}
               aria-expanded={isDropdownOpen[111]}>Program Law <span className="caret"></span></h3>
               <ul className={isDropdownOpen[111] ? "m-open" : "m-close"}>
                <li><Link href="/">Program Objective</Link></li>
                <li><Link href="/">Structure & Courses</Link></li>
                <li><Link href="/">Academic Calendar</Link></li>
              </ul>
              </div>
              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(112)}
               aria-expanded={isDropdownOpen[112]}>Examination <span className="caret"></span></h3>
               <ul className={isDropdownOpen[112] ? "m-open" : "m-close"}>
                <li><Link href="/">UG</Link></li>
                <li><Link href="/">PG</Link></li>
              </ul>
              </div>
              
               
              </div>

              <div className="col-md-4">
              <div className="in-block"> 
               <h3 
               onClick={() => toggleDropdown(113)}
               aria-expanded={isDropdownOpen[113]}>Management <span className="caret"></span></h3>
               <ul className={isDropdownOpen[113] ? "m-open" : "m-close"}>
                <li><Link href="/">Program Objective</Link></li>
                <li><Link href="/">Structure & Courses</Link></li>
                <li><Link href="/">Academic Calendar</Link></li>
              </ul>
              </div>
              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(114)}
               aria-expanded={isDropdownOpen[114]}>Research & Innovation <span className="caret"></span></h3>
               <ul className={isDropdownOpen[114] ? "m-open" : "m-close"}>
                <li><Link href="/">Ph.D.</Link></li>
                <li><Link href="/">LLD</Link></li>

              </ul>
              </div>
              
              </div>

              <div className="col-md-4">
              <div className="in-block">
               <h3 
               onClick={() => toggleDropdown(115)}
               aria-expanded={isDropdownOpen[115]}>Social Science <span className="caret"></span></h3>
               <ul className={isDropdownOpen[115] ? "m-open" : "m-close"}>
                <li><Link href="/">Program Objective</Link></li>
                <li><Link href="/">Structure & Courses</Link></li>
                <li><Link href="/">Academic Calendar</Link></li>
              </ul>
              </div>
              
               

              </div>

              </div>  
             
              </div>
            </li>

            <li className="dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(3)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[3]}
              href="javascript:void(0);"
              > 
              Research <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[3] ? "Open dropdown-menu" : "dropdown-menu"}>
              <ul>
              <li><Link href="/">Ph.D.</Link></li>
                <li><Link href="/">LLD</Link></li>
              </ul>
              </div>
            </li>

            <li className="dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(4)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[4]}
              href="javascript:void(0);"
              > 
              News <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[4] ? "Open dropdown-menu" : "dropdown-menu"}>
              <ul>
              <li><Link href="/">Photo Gallery</Link></li>
              <li><Link target="_blank" href="/pdf/news-update/Announcement.pdf">Announcement</Link></li>
              <li><Link href="/">Upcoming Events</Link></li>
              <li><Link target="_blank" href="/pdf/news-update/Circulars.pdf">Circulars</Link></li>
              <li><Link href="/">Notifications</Link></li>
              <li><Link target="_blank" href="/pdf/news-update/Media-Coverage.pdf">Media Coverage</Link></li>
              </ul>
              </div>
            
            </li>
          
            <li className="dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(5)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[5]}
              href="javascript:void(0);"
              > 
              Student’s Corner <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[5] ? "Open dropdown-menu" : "dropdown-menu"}>
              <ul>
              <li><Link href="/">Student Bar Council</Link></li>
              <li><Link href="/">Student Support</Link></li>
              <li><Link href="/">Scholarship</Link></li>
              <li><Link href="/">Anti-Ragging</Link></li>
              <li><Link href="/">Grievances</Link></li>
              <li><Link href="/">Feedback</Link></li>
              </ul>
              </div>
            </li>
           
            <li className="dropdown">
            <Link 
              className="dropdown-toggle"
              onClick={() => toggleDropdown(6)}
              role="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen[6]}
              href="javascript:void(0);"
              > 
              Placement <span className="caret"></span>
              </Link>
              <div className={isDropdownOpen[6] ? "Open dropdown-menu" : "dropdown-menu"}>
              <ul>
              <li><Link target="_blank" href="/pdf/placement/Placement-Brochure-2019-2024.pdf">E- Brochure</Link></li>
              <li><Link target="_blank" href="/pdf/placement/Recruitment-Process.pdf">Recruitment Process</Link></li>
              <li><Link target="_blank" href="/pdf/placement/Our-Recruiters.pdf">Our Recruiters</Link></li>
              <li><Link target="_blank" href="/pdf/placement/Placement-Report.pdf">Placement Report</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              </ul>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
        
       {/* <div>
          <button onClick={() => toggleShow(!show)}>
            toggle: {show ? "show" : "hide"}
          </button>
          {show && <div>Hi there</div>}
        </div> */}
      </header>
    </div>
  );
}

export default Header;
