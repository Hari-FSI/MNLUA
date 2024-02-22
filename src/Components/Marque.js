import React from "react";
import Link from "next/link";
const NotificationComponent = ({ notifications }) => {
  console.log(notifications);
  return (
    <div className="wapRer">
      <style jsx>{`
        .wapRer {
          display: flex;
          gap: 8px;
        }
        .wapRer p:hover {
          text-decoration: underline;
        }
        .wapRer p {
          padding: 0px;
          margin: 0px;
          color: #fff;
          cursor: pointer;
          padding-right: 8px;
          padding-left: 0;
        }
      `}</style>
      {notifications.map((notification, index) => (
        <p key={index}>
          {" "}
          {notification.uri == "internal:#" ? (
            notification.title + "  | "
          ) : (
            <>
              <Link
                href={notification.uri.replace("internal:", "")}
                target="_blank"
              >
                {notification.title}
              </Link>
              {index !== notifications.length - 1 && (
                <span style={{ "padding-left": "8px", color: "#fff" }}>
                  {" "}
                  |{" "}
                </span>
              )}
            </>
          )}
        </p>
      ))}
    </div>
  );
};

export default NotificationComponent;
