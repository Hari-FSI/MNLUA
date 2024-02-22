import Head from "next/head";
import React, { useEffect } from "react";
import Script from "next/script";

function InstaFeed() {
  return (
    <>
      <Script
        src="https://widgets.sociablekit.com/instagram-feed/widget.js"
        async
      />

      <div className="sk-instagram111">
        <div className="sk-instagram-feed" data-embed-id="138072"></div>
      </div>

      <style jsx>{`
        iframe#instagram-embed-0 {
          min-width: 100% !important;
          max-width: 100% !important;
          width: 100% !important;
          position: relative;
          height: 490px !important;
          overflow-y: scroll;
        }

        .sk-instagram111 {
          position: relative;
          height: 490px !important;
          width: 300px !important;
          overflow-y: scroll;
        }
      `}</style>
    </>
  );
}

export default InstaFeed;
