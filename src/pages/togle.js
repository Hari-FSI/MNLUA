import React, { useState, useEffect, useRef } from "react";

function Content() {
  const [isWide, setIsWide] = useState(false);

  const handleToggle = () => {
    setIsWide(!isWide);
  };

  return (
    <div className={`content ${isWide ? "wide" : "normal"}`}>
      <button onClick={handleToggle}>{isWide ? "Narrow" : "Wide"}</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        turpis ut diam dapibus, non euismod risus tincidunt. Integer pulvinar,
        mauris a consectetur auctor, velit velit tristique lectus, sed laoreet
        nisl turpis ac justo.
      </p>
    </div>
  );
}
export default Content;
