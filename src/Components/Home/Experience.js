import React from "react";
import Image from "next/image";
import NewImage from "./NewImage";
import Link from "next/link";

function Leadership({ homeexperience }) {
  return (
    <div>
    <div
    className="d-flexx"
    dangerouslySetInnerHTML={{
    __html: homeexperience[0]?.body,
    }}
    />
    </div>
  );
}

export default Leadership;
