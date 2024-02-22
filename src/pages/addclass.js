import React, { useState } from "react";

function MyComponent() {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <style>{`
    .active {
        color:orange;
    }
    `}</style>
      <div className="flex">
        <button onClick={handleClick}>Click me</button>
        <div className={isActive ? "active" : ""}>Element to add class to</div>
        <button onClick={handleClick}>Click me</button>
        <div className={!isActive ? "active" : ""}>Element to add class to</div>
      </div>
    </>
  );
}
export default MyComponent;
