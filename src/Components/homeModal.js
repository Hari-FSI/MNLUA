import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewImage from "./NewImage";

function Modal({ popup, setShow, link }) {
  console.log(popup);
  return (
    <div>
      <div
        id="success-pop"
        className="modal fade pop-up-sec success-pop in"
        role="dialog"
        style={{ display: "block", paddingRight: 0 }}
        aria-hidden="false"
      >
        <div className="modal-backdrop  fade in" style={{ height: 1050 }} />
        <div className="modal-dialog home_modal_icon" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <span
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setShow("Off")}
              >
                ×
              </span>
              <div className="clearfix" />
              <div className="succfail-box succ">
                {/* <h2 className="pop-headng text-center">Success !</h2> */}
                {/* <Link href="{link}"> */}
                <Link href="https://mnlua-git-main-support-flyingstars.vercel.app/mnlua_admission_form">
                  <NewImage
                    src={popup[0].field_image}
                    className="tick-img"
                    alt="fsi tick"
                    width="568"
                    height="428"
                  />
                </Link>

                {/* <p>
									Thank you for sharing your feedback. <br />{" "}
									<span> Our team will get back to you at the earliest </span>
								</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
