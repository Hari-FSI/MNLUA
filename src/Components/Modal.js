import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Modal() {
  const router = useRouter();

  return (
    <div>
      <div
        id="success-pop"
        className="modal fade pop-up-sec success-pop in"
        role="dialog"
        style={{ display: "block", paddingRight: 0 }}
        aria-hidden="false"
      >
        <div className="modal-backdrop fade in" style={{ height: 915 }} />
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <span
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => router.refresh()}
              >
                ×
              </span>
              <div className="clearfix" />
              <div className="succfail-box succ">
                <h2 className="pop-headng text-center">Success !</h2>
                <Image
                  src="/images/sucess.png"
                  className="tick-img"
                  alt="fsi tick"
                  width="220"
                  height="119"
                />
                <p>
                  Thank you for sharing your feedback.
                  <br />
                  <span> Our team will get back to you at the earliest </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
