import React from "react";
import Image from "./NewImage";
function AltText({ url, index }) {
  console.log(url);
  let imgs = url.split(" ");
  imgs = imgs.filter(function (e) {
    return e;
  });
  let ret = imgs[1].replace("alt=", "");
  console.log(imgs);
  return (
    <>
      <Image
        classNeme="imgg"
        key={index}
        src={imgs[0]}
        alt={`Image ${index + 1}`}
        width="359"
        height="260"
      />
      <p>{ret}</p>
    </>
  );
}

export default AltText;
