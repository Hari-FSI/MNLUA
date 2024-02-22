import React from "react";
import Image from "./NewImage";
import Link from "next/link";
function ResourceIconTile({ images, links }) {
  const imageList = images.split(",");
  const linkList = links.split(",");
  let parts = [];
  linkList.forEach((element, index) => {
    console.log(element);
    parts[index] = linkList[index].split("TITLE=");
    console.log(parts[index]);
  });

  function convertLinkList(linklist) {
    return linklist
      .map((item) => {
        const parts = item.split("TITLE=");
        if (parts.length === 2) {
          const name = parts[0].trim();
          const value = parseInt(parts[1].trim());
          if (!isNaN(value)) {
            return [name, value];
          }
        }
        return null; // Invalid format, return null or handle the error accordingly
      })
      .filter((item) => item !== null);
  }

  const result = convertLinkList(linkList);

  return (
    <div>
      {" "}
      {imageList.map((imageUrl, index) => (
        <div key={index}>
          {" "}
          <Link target="_blank" href={parts[index][0]}>
            <Image
              key={index}
              src={imageUrl.trim()}
              alt={`Image ${index + 1}`}
              width="359"
              height="145"
            />
            <p>{parts[index][1]}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ResourceIconTile;
