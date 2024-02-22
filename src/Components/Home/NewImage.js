import React from "react";
import Image from "next/image";

function NewImage({ src, width = "360", height = "210", alt = "image" }) {
  const imageURL = `https://${process.env.NEXT_PUBLIC_URL}/` + src;
  return (
    <div>
      <Image src={imageURL} alt={alt} width={width} height={height} />
    </div>
  );
}

export default NewImage;
