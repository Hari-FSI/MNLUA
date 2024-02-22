import { useState } from "react";

function CollapsedToggleButton() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {!isCollapsed && (
        <div>
          {/* Content to be displayed when the button is not collapsed */}
          <p>Some hidden content...</p>
        </div>
      )}
    </div>
  );
}

export default CollapsedToggleButton;
