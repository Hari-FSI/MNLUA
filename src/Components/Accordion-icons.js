import React, { useState } from "react";
import Image from "./NewImage";
import Link from "next/link";

const Accordion = ({ title, images, links }) => {
  const [isActive, setIsActive] = useState(false);
  const imageList = images.split(",");
  const linkList = links.split(",");

  let parts = [];
  linkList.forEach((element, index) => {
    console.log(element);
    parts[index] = linkList[index].split("TITLE=");
    console.log(parts[index]);
  });

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div class="panel-heading" role="tab" id="headingOne">
          <h4 class="panel-title">{title}</h4>
        </div>
        <div className="accordion-btn">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
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
      )}
    </div>
  );
};

export default Accordion;
