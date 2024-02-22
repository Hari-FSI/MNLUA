import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  console.log(items);
  return (
    <div>
      <style jsx>{`
        .arrowIcon {
          position: absolute;
          top: 5px;
          color: #fff;
          right: 20px;
          font-size: 20px;
        }
      `}</style>
      <div className="panel panel-default">
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="accordion-item"
              onClick={() => handleItemClick(index)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <div className="panel-heading">
                <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
              </div>

              {index === activeIndex ? (
                <div className="arrowIcon">-</div>
              ) : (
                <div className="arrowIcon">+</div>
              )}
            </div>
            {index === activeIndex && (
              <div>
                <div
                  className="panel-body"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
