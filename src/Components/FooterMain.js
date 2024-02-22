import DigitComponent from "./DigitComponent";
import Link from "next/link";
import Image from "next/image";
function Footer({ counter }) {
  return (
    <div>
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
      <footer  >
        <div className="footer-top" style={{
        backgroundImage:`url(/images/banner5.webp)`,
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="in-block">
                <h3>ACADEMICS</h3>
                <ul className="list-group">
                  <li><Link href="/">Academic Calendar</Link></li>
                  <li><Link href="/">Research Projects</Link></li>
                  <li><Link href="/">Results</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="in-block">
                <h3>OUR CAMPUS & LIFE</h3>
                <ul className="list-group">
                  <li><Link href="/">Internal Complaints Committee</Link></li>
                  <li><Link href="/">Research Centers</Link></li>
                  <li><Link href="/">Tenders</Link></li>
                  <li><Link href="/">Downloads</Link></li>
                  <li><Link href="/">Terms and Conditions</Link></li>
                  <li><Link href="/">Policies</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="in-block">
                <h3>QUICK LINKS</h3>
                <ul className="list-group">
                  <li><Link href="/">Career@MNLUA</Link></li>
                  <li><Link href="/">Tender</Link></li>
                  <li><Link href="/">RTI</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
            <div className="in-block address-blk">
                <h3>CONTACT US</h3>
                <ul className="list-inline">
                  <li>
                  <i className="fa fa-map" aria-hidden="true"></i>
                    <p>
                      <b>Maharashtra National Law University, Aurangabad</b>
                      <br />
                      Paithan Road, Kanchanwadi,
                      <br />
                      Aurangabad (MS)-431005
                    </p>
                  </li>
                  <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                    <p>
                    0240-2953575
                    </p>
                  </li>
                  <li>
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                    <p>
                    registrar@mnlua.ac.in
                    </p>
                  </li>
                </ul>
                
              </div>
              <div className="in-block socialicons">
                <h3>Get in touch</h3>
              <ul className="list-inline">
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100092193672317"
                    >
                    <Image
                    src="/images/icons/fb.png"
                    alt="social"
                    width="89"
                    height="101"
                    />
                    </Link>
                  </li>
                  <li>
                  <Link
                    target="_blank"
                    href="https://twitter.com/mnluauniversity?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Amnluauniversity%7Ctwcon%5Es1_c1"
                  >
                    <Image
                    className="tw"
                    src="/images/icons/tw.png"
                    alt="social"
                    width="89"
                    height="101"
                    />
                  </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/mnluauniversity/"
                    >
                     <Image
                    src="/images/icons/insta.png"
                    alt="social"
                    width="89"
                    height="101"
                    />
                    </Link>
                  </li>
                </ul>
               </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        </div>

        <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="connect-us">
                <p>
                  © Maharashtra National Law University, Aurangabad All right
                  reserved 2023.
                </p>
              </div>
            </div>
            <div className="col-md-2 text-center visitors-counter">
              <p>
                {" "}
                Visitors: <DigitComponent digit={counter} />
              </p>
            </div>

            <div className="col-md-4 text-right">
              <p>
                {" "}
                <span>
                  HANDCRAFTED WITH{" "}
                  <span style={{ color: "red", fontSize: 18 }}>♥</span> BY{" "}
                  <Link
                    rel="nofollow"
                    href="https://www.flyingstars.co/"
                    target="_blank"
                  >
                    <Image
                      style={{ width: 20 }}
                      src="/images/fly-logo.png"
                      alt="stars"
                      width={20}
                      height={30}
                    />
                    FLYING STARS{" "}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      </footer>
    </div>
  );
}

export default Footer;
