import React from "react";
import TwitterContainer from "./TwitterContainer";
import InstaFeeds from "./InstaFeeds";
function Socialfeeds() {
  // const instaIframe = document.getElementById("insta_feed");

  // console.log(instaIframe);

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <iframe
            className="social_feed"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100092193672317&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=472512407686625"
            width="100%"
            height="490px"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className="col-xs-12 col-lg-4">
          {" "}
          <TwitterContainer />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\tiframe#instagram-embed-0{min-width: 100% !important;  max-width: 100% !important;  width: 100% !important; position:relative;height: 490px !important; overflow-y: scroll;  }\n\t\t\t",
          }}
        />
        <div className="col-xs-12 col-lg-4">
          <InstaFeeds />
        </div>
      </div>
    </div>
  );
}

export default Socialfeeds;
